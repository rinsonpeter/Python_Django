from scipy.misc import imread, imsave, imresize
import os
import cv2
import numpy as np

dirname = os.path.dirname(__file__)
filename1 = os.path.join(dirname, 'images/download.png')
filename2 = os.path.join(dirname, 'images/grayscale.jpg')
filename3 = os.path.join(dirname, 'images/blackWhite.jpg')

image = imread(filename1)
if(len(image.shape)<3):
      print ('gray')
elif len(image.shape)==3:
      print ('Color(RGB)')
else:
      print ('others')