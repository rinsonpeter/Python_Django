import os
import cv2

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'images/Screenrecorder-2019-04-11-18-56-46-623.mp4')



vdo=cv2.VideoCapture(0)
vdo.set(3,640)
vdo.set(4,480)
vdo.set(10,100)


while True:
    success,img=vdo.read()
    cv2.imshow("VideoWindow",img)  
    if cv2.waitKey(1)  & 0xFF==ord('q'):
        break
