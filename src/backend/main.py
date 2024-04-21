from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import base64
import io
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from vision import request
from databases import Database
from typing import List


# Define a Pydantic model for incoming data
class ImageData(BaseModel):
    image: str  # Base64 encoded image string

# Pydantic models for data validation
class EcoPointCreate(BaseModel):
    lat: float
    lng: float

class EcoPoint(EcoPointCreate):
    key: int  # Primary key returned from the database

# SSL CA file path
SSL_CA_PATH = '/bd/singlestore_bundle.pem'

# Database URL with SSL options
DATABASE_URL = f"mysql+aiomysql://joao-6cd5e:Qyl97wgir9GJrBkAqGAso1h5bVhRBmEQ" \
               f"@svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com:3333" \
               f"/database_60489?ssl=true&ssl_ca={SSL_CA_PATH}"

app = FastAPI()
database = Database(DATABASE_URL)
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup")
async def startup():
    await database.connect()
    # Ensure the ECOPOINTS table exists
    await database.execute("""
    CREATE TABLE IF NOT EXISTS ECO (
        `key` BIGINT AUTO_INCREMENT PRIMARY KEY,
        `lat` DOUBLE,
        `lng` DOUBLE
    );
    """)

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")   
async def root():
    return {"message": "Hello World"}

@app.post("/upload-image/")
async def upload_image(data: ImageData):
    """
    Upload an image encoded in base64 and process it using OpenAIIntegration.
    """
    try:
        # Decode the base64 string to get image data
        image_data = base64.b64decode(data.image.split(",")[1])
        # Create an image file from binary data
        image_file = io.BytesIO(image_data)
        image = Image.open(image_file)
        image.save("uploaded_image.jpg")  # Temporarily save the image for processing

        # Initialize the OpenAI integration with the image file path
        response = request("uploaded_image.jpg")  # Make the request to OpenAI's API

        return {"result": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing the image: {str(e)}")

@app.post("/ecopoints/", response_model=EcoPoint)
async def create_ecopoint(ecopoint: EcoPointCreate):
    insert_query = """
    INSERT INTO ECO (lat, lng)
    VALUES (:lat, :lng);
    """
    values = {"lat": ecopoint.lat, "lng": ecopoint.lng}
    last_record_id = await database.execute(query=insert_query, values=values)
    
    select_query = "SELECT `key`, lat, lng FROM ECO WHERE `key` = :last_record_id;"
    select_values = {"last_record_id": last_record_id}
    result = await database.fetch_one(query=select_query, values=select_values)
    return result

@app.get("/ecopoints/", response_model=List[EcoPoint])
async def read_ecopoints():
    query = "SELECT `key`, lat, lng FROM ECO"
    try:
        result = await database.fetch_all(query)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/clear-ecopoints/")
async def clear_ecopoints():
    truncate_query = "TRUNCATE TABLE ECO"
    try:
        await database.execute(truncate_query)
        return {"status": "ECO table cleared successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to clear ECO table: {str(e)}")


if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True, debug=True)

