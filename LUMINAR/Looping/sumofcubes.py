number=int(input("enter a number:"))
num=number
cube=0

while(num!=0):
    digit=num%10
    cube=cube+(digit**3)
    num=num//10

print("sum of cubes:",cube)

if (number==cube):
    print(cube,"is an amstrong number")

