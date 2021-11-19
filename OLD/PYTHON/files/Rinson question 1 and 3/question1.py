arr = [1, 8, 3, 11, 4, 9, 2, 7]
dict = {}
sum = 0
for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        sum = sum + arr[i] + arr[j]

        if sum not in dict:
            dict[sum] = 1
        else:
            dict[sum] += 1
        sum = 0

high = 0
for m in dict:
    if dict[m] > high:
        high = dict[m]

print('--------------------')
for m in dict:
    if dict[m] == high:
        print(m)
