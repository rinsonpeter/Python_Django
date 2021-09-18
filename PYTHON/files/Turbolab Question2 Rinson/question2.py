# from string import ascii_lowercase
# from string import ascii_uppercase
def split_string_rinson(string1, splitter):
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

ascii_lowercase = "abcdefghijklmnopqrstuvwxyz"
ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
digits = "0123456789"
specialchar = "&@#$%'"
string1 = "hi hello. its a new test. inputs are ZZZm'Z5. outpt is 518."
k = 1
dict = {}
arr = []
for i in ascii_lowercase:
    dict[i] = k
    k += 1
f = 27
for j in ascii_uppercase:
    dict[j] = f
    f += 1

# for m in dict:
#     print(m, ": ", dict[m])

data = split_string_rinson(string1, '.')
sum = 0
for i in range(len(data)):
    arr.append(0)
i = 0
for letters in data:
    for letter in letters:
        if letter in dict:
            sum += dict[letter]
        elif letter in digits:
            sum += int(letter)
            # print("digits")
        elif letter in specialchar:
            sum += 53
            # print("specials")
        elif letter not in dict:
            sum += 0
    arr[i] = sum
    sum = 0
    i = i + 1
# print(data)
# print(arr)

high = 0
index = 0
for i in range(len(arr)):
    if arr[i] > high:          # 69>0   134>402
        high = arr[i]
        index = i

print("weightage:", high)
print("Output string: ", data[index])


