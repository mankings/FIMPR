from vision import OpenAIIntegration
from schema import ImageInput
from typing import Optional
from config import CONFIG
import torch
from model import Model
import shutil   

from fastapi import FastAPI, Form, File, UploadFile
from fastapi.logger import logger
import uvicorn
from predict import predict

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    """
    Initialize FastAPI and add variables
    """

    # logger.info('Running envirnoment: {}'.format(CONFIG['ENV']))
    # logger.info('PyTorch using device: {}'.format(CONFIG['DEVICE']))

    # Initialize the pytorch model
    model = Model()
    
    # add model and other preprocess tools too app state
    app.package = {
        "model": model
    }

@app.get("/")   
async def root():
    return {"message": "Hello World"}

@app.post("/upload-image/")
async def upload_image(description: Optional[str] = Form(None), image: UploadFile = File(...)):
    """
    Upload an image along with its metadata.
    """
    open_ai = OpenAIIntegration(image.filename)
    response = open_ai.request()

    return response
    # with open(f'../../model/dataset/test/{image.filename}', 'wb') as buffer:
    #     shutil.copyfileobj(await image.read(), buffer)

    # type = predict(app.package, image.filename)
    
    # results = {
    #     'pred': type,
    # }


    # return {
    #     "error": False,
    #     "results": results
    # }

if __name__ == '__main__':
    # server api
    uvicorn.run("main:app", host="0.0.0.0", port=8080,
                reload=True, debug=True, log_config="log.ini"
                )