import base64
import requests
from PIL import Image
import io
import base64
import requests

# OpenAI API Key
api_key = "api-key"

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

def request(image_path):
    # Getting the base64 string
    base64_image = encode_image(image_path)

    headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
    }

    payload = {
    "model": "gpt-4-turbo",
    "messages": [
        {
        "role": "user",
        "content": [
            {
            "type": "text",
            "text": "You are given an image of an object. Your response is limited in text. You are to only return three facts. RECYCLABLE: yes/no; INSTRUCTIONS: [maximum of one sentence (50 characters) describing how to recycle the object (do not mention in which bin) and if there is no recyclable parts]; BINS: yellow/blue/green/none [can be more than one, if several, separate by commas]"
            },
            {
            "type": "image_url",
            "image_url": {
                "url": f"data:image/jpeg;base64,{base64_image}",
                "detail": "low"
            }
            }
        ]
        }
    ],
    "max_tokens": 300
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    response = response.json()
    print(response)
    return response
