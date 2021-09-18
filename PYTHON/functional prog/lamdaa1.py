#lambda
f=lambda num1,num2:num1*num2
print(f(10,2))

f1=lambda n1,n2:n1/n2
print(f1(20,2))



#map
lst=[1,2,3,3,4]
#def square(num):
#    return num*num
sq=list(map(lambda num:num*num,lst))
print(sq)

#filter
#def even(num):
#    return num%2==0

evens=list(filter(lambda num:num%2==0,lst))
print(evens)
