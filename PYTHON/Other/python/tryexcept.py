#try and except
print("grading system to find the student is approved or not using two grades and attendence")

datavalid=False
while datavalid==False:
    grade1=input("enter grade1 from 0 to 10: ")
    try:
        grade1=float(grade1)
    except:
        print(" except invalid,enter valid grade")
        continue
    
    if grade1<0 or grade1>10:
        print(" if invalid,enter valid grade")
        continue
    else:
        datavalid=True
#grade2
datavalid=False
while datavalid==False:
    grade2=input("enter grade2 from 0 to 10: ")
    try:
        grade2=float(grade2)
    except:
        print("invalid,enter valid grade")
        continue
    
    if grade2<0 or grade2>10:
        print("invalid,enter valid grade")
        continue
    else:
        datavalid=True
        

datavalid=False
while datavalid==False:
    totalclass=input("enter total no of classes: ")

    try:
        totalclass=int(totalclass)
    except:
        print("invalid, enter a no only")
        continue
    if totalclass<=0:
        print("Total class cannot be zero or leass")
        continue
    else:
        datavalid=True
    

datavalid=False
while datavalid==False:
    absence=input("enter total no of absence: ")

    try:
        absence=int(absence)
    except:
        print("invalid, enter a no only")
        continue
    
    if absence<0 or absence>totalclass:
        print("absence should be btw 0 and totalclass")
        continue
    datavalid=True


avgrade=(grade1+grade2)/2
attendence=((totalclass-absence)/totalclass)*100

print("average grade:",avgrade)
print("attendence:",attendence,'%')

if (avgrade>=6 and attendence>=80.0):
    print("APPROVED :)")
elif(avgrade<6 and attendence>=80.0):
    print("Not Approved, grade is low")
elif(attendence<80 and avgrade>6):
    print("Not Approved,attendence is low ")
else:
    print("Not Approved, attendence and grade is low")



















    
        
