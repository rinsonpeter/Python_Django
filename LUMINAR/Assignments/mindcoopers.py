def printNonDuplicate(array):
    dict = {}
    for i in array:
        if i not in dict:
            dict[i] = 1
        else:
            dict[i] += 1

    for j in dict:
        if dict[j]==1:
            print(j)

array =  [1, 4, 1, 6, 2, 2]
printNonDuplicate(array)
