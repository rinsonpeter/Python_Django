import os
import cv2

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'images/download.png')



img=cv2.imread(filename)
cv2.imshow("OutCV2",img)
cv2.waitKey(0)