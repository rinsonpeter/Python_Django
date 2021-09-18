import time as t
import matplotlib.pyplot as plt

times=[]
mistakes=0

print("typing speed test\
type programming 5 times")

input("Press 'enter' to continue ")

while len(times)<5:
    start=t.time()
    word=input("Type the word: ")
    end=t.time()
    gap=end-start

    times.append(gap)

    if word.lower()!='rinson':
        mistakes+=1

print('you made',str(mistakes),'mistake(s)')
print("lets see your evolution")
t.sleep(3)

x=[1,2,3,4,5]
y=times    #list of time(gap)
temp=['1','2','3','4','5']
plt.xticks(x,temp)
plt.xlabel('Attempts')
plt.ylabel('time in seconds')
plt.title('evolution')
plt.plot(x,y)
plt.show()
