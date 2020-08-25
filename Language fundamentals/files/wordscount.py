f=open("words","r")
dict={}

for lines in f:
    words=lines.rstrip("\n").split(" ")
    print(words)

    for word in words:
        if word not in dict:
            dict[word]:
