import torch
import torchvision.transforms as transforms


transformations = transforms.Compose([transforms.Resize((256, 256)), transforms.ToTensor()])

def predict(model, image):
        example_image = transformations(image)
        y = model(example_image)
        _, preds = torch.max(y, dim=1)
        result = model.classes[preds[0].item()]
        print("The image resembles", result + ".")
        return result