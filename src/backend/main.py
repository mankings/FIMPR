from vision import OpenAIIntegration

from fastapi import FastAPI, File, UploadFile
import uvicorn

app = FastAPI()

@app.get("/")   
async def root():
    return {"message": "Hello World"}

@app.post("/upload-image/")
async def upload_image(image: UploadFile = File(...)):
    """
    Upload an image along with its metadata.
    """
    print(f'\nImage: {image.filename}')
    open_ai = OpenAIIntegration(image)
    response = open_ai.request()

    return response

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8080,
                reload=True, debug=True, log_config="log.ini"
                )