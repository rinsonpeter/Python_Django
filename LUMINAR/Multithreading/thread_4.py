import time
from threading import *

def squares(num):
    for n in num:
        time.sleep(1)
        print(n**2)

def double(num):
    for n in num:
        time.sleep(1)
        print("double",n,2*n)
num=[1,2,3,4,5,6]

begintime=time.time()
print("begin time",begintime)

t1=Thread(target=squares,args=(num,))
t1.start()
t2 = Thread(target=double, args=(num,))
t2.start()

t1.join()
t2.join()
endtime=time.time()
totaltime=begintime-begintime
print("totaltime",totaltime)

