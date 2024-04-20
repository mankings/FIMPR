from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import base64
import io
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from vision import request

app = FastAPI()

# Define a Pydantic model for incoming data
class ImageData(BaseModel):
    image: str  # Base64 encoded image string

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

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

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True, debug=True)
