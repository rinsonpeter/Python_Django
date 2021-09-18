lst = [1, 3, 4, 9]
sq = [(i * i) for i in lst]
print(sq)
print(type(sq))

odd = [i for i in lst if i % 2 != 0]
even = [i for i in lst if i % 2 == 0]
print(odd, "\n", even)
