import cv2
print(cv2.__version__)
img=cv2.imread("F:\python\Python\Luminar\Python_Django\LUMINAR\OpenCV\images\download.png")

cv2.imshow("OutCV2",img)

cv2.waitKey(0)