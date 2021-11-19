line=open("tttt","r")
#print("line         :",line)
#print("type of line :",type(line))
dict = {}
dictword = {}

for words in line:
    word = words.rstrip("\n").split(' ')     #for lines in f:data = lines.rstrip("\n").split(",")
#    print("words        :", words)
#    print("type of word:", type(word))

    for words in word:
        for j in words:
            if j not in dict:
                dict[j] = 1
            else:
                dict[j] += 1

    for words in word:
        if words not in dictword:
            dictword[words] = 1
        else:
            dictword[words] += 1

#print("dict         :",dict)
for i in dict:
    print(i,":",dict[i])
print("---------------------------")
#print("dictword     :",dictword)
for i in dictword:
    print(i,":",dictword[i])

