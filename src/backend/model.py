import torch
import torchvision.models as models
import torch.nn as nn
import torch.nn.functional as F

N_CLASSES = 6


def accuracy(outputs, labels):
    _, preds = torch.max(outputs, dim=1)
    return torch.tensor(torch.sum(preds == labels).item() / len(preds))

class ImageClassificationBase(nn.Module):
    def training_step(self, batch):
        images, labels = batch 
        out = self(images)                  # Generate predictions
        loss = F.cross_entropy(out, labels) # Calculate loss
        return loss
    
    def validation_step(self, batch):
        images, labels = batch 
        out = self(images)                    # Generate predictions
        loss = F.cross_entropy(out, labels)   # Calculate loss
        acc = accuracy(out, labels)           # Calculate accuracy
        return {'val_loss': loss.detach(), 'val_acc': acc}
        
    def validation_epoch_end(self, outputs):
        batch_losses = [x['val_loss'] for x in outputs]
        epoch_loss = torch.stack(batch_losses).mean()   # Combine losses
        batch_accs = [x['val_acc'] for x in outputs]
        epoch_acc = torch.stack(batch_accs).mean()      # Combine accuracies
        return {'val_loss': epoch_loss.item(), 'val_acc': epoch_acc.item()}
    
    def epoch_end(self, epoch, result):
        print("Epoch {}: train_loss: {:.4f}, val_loss: {:.4f}, val_acc: {:.4f}".format(
            epoch+1, result['train_loss'], result['val_loss'], result['val_acc']))
        
class ResNet(ImageClassificationBase):
    def __init__(self):
        super().__init__()
        # Use a pretrained model
        self.network = models.resnet50(pretrained=True)
        # Replace last layer
        num_ftrs = self.network.fc.in_features
        self.network.fc = nn.Linear(num_ftrs, N_CLASSES)
        self.classes = ['cardboard', 'plastic', 'metal', 'glass', 'trash', 'paper']
    
    def forward(self, xb):
        return torch.sigmoid(self.network(xb))
    

class Model():
    def __init__(self) -> None:
        self.model = ResNet()
        self.model.load_state_dict(torch.load(
            '../model/model.pt', map_location=torch.device('cpu')))
        self.model.eval()

    # def predict(self, image):
    #     y = self.model(image)
    #     _, preds = torch.max(y, dim=1)
    #     result = self.model.classes[preds[0].item()]
    #     print("The image resembles", result + ".")
    #     return result

    
    
    # def predict_external_image(self, image_name):
    #     image = Image.open(Path('./input/' + image_name))

    #     example_image = transformations(image)
    