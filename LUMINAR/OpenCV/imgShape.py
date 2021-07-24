import os
import cv2

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'images/download.png')
img=cv2.imread(filename)
print(img.shape)
imgResize=cv2.resize(img,(300,200))



cv2.imshow("OutCV2OG",img)
cv2.imshow("OutCV2",imgResize)

cv2.waitKey(0)