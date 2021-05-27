#string1 = "hi hello. its a new test. inputs are ZZZm'Z5. outpt is 518."
print("hello")
def split_string(string1, splitter):
    y = splitter
    temp = ""
    lst = []
    for i in string1:
        if i == y:
            lst.append(temp)
            temp = ''
        else:
            temp += i

    return lst

string1 = "hi hello. its a new test. inputs are ZZZm'Z5. outpt is 518."
splitter = '.'

if __name__ == '__main__':
    result=split_string(string1, splitter)
    print(result)
