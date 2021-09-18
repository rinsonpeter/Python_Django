from  threading import *
import time

def display():
    for i in range(1,10):
        time.sleep(2)
        print("Child thread executing")
    print(current_thread().getName())

t=Thread(target=display)
t.start()

for i in range(1,10):
    time.sleep(2)
    print("main thread")
print(current_thread().getName())


