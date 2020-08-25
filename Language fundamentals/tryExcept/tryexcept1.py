num1=int(input("enter num1:"))
num2=int(input("enter num2:"))
lst=[1,5,8,6]
try:
    res=num1/num2
    print("result: ",res)
    print("statements...")
except Exception as e:
    print(e.args)

try:
    pos = int(input("enter index position:"))
    print(lst[pos])
except Exception as e:
    print(e.args)

finally:
    print("finally block exceted  :)")
