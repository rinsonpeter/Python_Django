line="hai hello ha22i 22 hey sandra  \
     hello sandra hai hello"
words=line.rstrip("\n").split(' ')
# print("line         :",line)
# print("type of line :",type(line))

# print("words        :",words)
# print("type of words:",type(words))
dictl={}
dictword={}

for word in words:
    for j in word:
        if j not in dictl:
            dictl[j] = 1
        else:
            dictl[j] += 1

for word in words:
    if word not in dictl:
        dictword[word] = 1
    else:
        dictword[word] += 1

print("dictl         :",dictl)
for i in dictl:
    print(i,":",dictl[i])
print("dictword     :",dictword)
for i in dictword:
    print(i,":",dictword[i])

