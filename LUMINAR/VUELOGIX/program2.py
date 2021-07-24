import os
import cv2
import numpy as np

dirname = os.path.dirname(__file__)

filename1 = os.path.join(dirname, 'images/download.png')
filename2 = os.path.join(dirname, 'images/grayscale.jpg')
filename3 = os.path.join(dirname, 'images/blackWhite.jpg')

img1=cv2.imread(filename1)
img2=cv2.imread(filename2)
img3=cv2.imread(filename3)

img1Shape=img1.shape
img2Shape=img2.shape
img3Shape=img3.shape

print(img1Shape)
print(img2Shape)
print(img3Shape)
