import os
import cv2
import numpy as np

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'images/download.png')

img=np.zeros((512,512))

cv2.imshow("IMG",img)

cv2.waitKey(0)