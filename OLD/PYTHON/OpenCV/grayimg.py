import os
import cv2
import numpy as np

kernel=np.ones((5,5),np.uint8)
dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'images/download.png')

img=cv2.imread(filename)

imgGray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
imgBlur=cv2.GaussianBlur(imgGray,(7,7),0)
imgCanny=cv2.Canny(img,150,200)
imgDilation=cv2.dilate(imgCanny,kernel,iterations=5)
imgEroded=cv2.erode(imgDilation,kernel,iterations=2)

cv2.imshow("GrayImage",imgGray)
cv2.imshow("GrayImageBLUR",imgBlur)
cv2.imshow("IMGCANNY",imgCanny)
cv2.imshow("Dilation image",imgDilation)
cv2.imshow("ERODED",imgEroded)



cv2.waitKey(0)

