x = []
y = int(input("enter the limit: "))
for i in range(0, y):
    i = int(input("enter an element: "))
    x.append(i)

print("current list",x)
for j in range(0, len(x)):
    if x[j] > 5:
        x[j] = x[j] + 1
    elif x[j] < 5:
        x[j] = x[j] - 1
    else:
        pass
print("updated list",x)
