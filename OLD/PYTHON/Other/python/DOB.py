month=('jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec')
print(month)
print(type(month))
date=str(input("enter DOB in DD MM YY format(12 10 1992):"))
index=int(date[3:5])-1
print(index)
print('you were born in :',month[index])
