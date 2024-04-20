import base64
import requests
from heic2png import HEIC2PNG


class OpenAIIntegration():
    def __init__(self, image_path=None):
        self.api_key = "sk-proj-HAmWVwyEoVQnnlO6HgbZT3BlbkFJLPOgbVEubUFYNP7qBuCt"
        # Path to your image
        self.image_path = image_path

    # Function to encode the image
    def encode_image(self, image_path):
        return base64.b64encode(image_path.file.read()).decode('utf-8')

    def convert_image(self, image_path):
        heic_img = HEIC2PNG(image_path, quality=100)
        heic_img.save()
        print("HEIC image converted to PNG")
        image_path.replace("HEIC", "png")

    def request(self):
        # if self.image_path.path.endswith(".HEIC"):
        if self.image_path.content_type == "image/heic":
            self.convert_image(self.image_path)

        # Getting the base64 string
        base64_image = self.encode_image(self.image_path)

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }

        payload = {
            "model": "gpt-4-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "You are given an image of an object. Your response is limited in text. You are to only return three facts. RECYCLABLE: yes/no/partially; INSTRUCTIONS: [maximum of one sentence describing how to recycle the object (do not mention in which bin) and if there is no recyclable parts]; BINS: yellow/blue/green/none [can be more than one]"
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            "max_tokens": 300
        }

        response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

        print(response.json())

        return response.json()