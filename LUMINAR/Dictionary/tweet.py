# line=open("tweeted","w")
# def writetwt(name,tweet):
#     line.write(name+" "+tweet+"\n")
#     line.flush()
#
# count=int(input("How many tweets: "))
# for i in range(0,count):
#     twtname=input("Enter name: ")
#     twtpost=input("Enter post: ")
#     writetwt(twtname,twtpost)

dict = {}
dict2 = {}
f = open("tweeted", "r")
for word in f:
    tw = word.rstrip("\n").split(" ")
    data1 = tw[0]
    data2 = tw[1]

    if data1 not in dict:
        dict[data1] = 1
    else:
        dict[data1] += 1

high = 0
big = " "
for i in dict:                  # finds highest(value) in dict
    if int(dict[i]) >= high:
        high = int(dict[i])
        big = i

if big not in dict2:         # adds highest(value) to  dict2
    dict2[big] = high

for i in dict:                   # checks dict for similar
    if i not in dict2:       # highest value and adds to dict2
        if dict[i] == high:
            dict2[i] = high

for i in dict2:
    print(i, " ", dict2[i])
