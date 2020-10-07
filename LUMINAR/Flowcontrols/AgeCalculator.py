bdate=int(input("enter birth date: "))
bmonth=int(input("enter birth month: "))
byear=int(input("enter birth year: "))
cdate=26
cyear=2020
cmonth=7
Age=0
if (byear<cyear):
    Age = (cyear - byear)      #2020-2019
if (cmonth<bmonth):           #12>07
    Age=Age-1                 # 1-1
if (bmonth==cmonth):           # 12==12
    if (cdate<bdate):        # 28<26
            Age=Age-1         # 1-1

print("Age: ",Age)


