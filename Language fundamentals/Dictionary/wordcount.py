line="hai hello ha22i 22 hey sandra " \
     "hello sandra hai hello"
print("line         :",line)
print("type of line :",type(line))
words=line.rstrip("\n").split(' ')
print("words        :",words)
print("type of words:",type(words))
dict={}
dictword={}

for word in words:
    for j in word:
        if j not in dict:
            dict[j] = 1
        else:
            dict[j] += 1

for word in words:
    if word not in dict:
        dictword[word] = 1
    else:
        dictword[word] += 1

print("dict         :",dict)
for i in dict:
    print(i,":",dict[i])
print("dictword     :",dictword)
for i in dictword:
    print(i,":",dictword[i])

