import pandas as pd

#Please change Path for file
data = pd.read_excel (r'F:\python\Python\Luminar\Python_Django\LUMINAR\Pandas\EmployeeDetails (2).xlsx') 
df = pd.DataFrame(data, columns= ['Employee ID','Employee Name','Gender','Department','Years of Experience'])

length=len(df.index)                                 #length of row
data_dict = df.to_dict()                             #converting to dict

print()    
eid=(input("Enter employee id: "))
detail=input("Enter coloum value to filter: ")
print()

flag=0
flag1=0

for i in range(0,length): 
    if eid in str(data_dict['Employee ID'][i]):
        flag=1
        print("Employee Name: ",data_dict['Employee Name'][i])
        if detail in data_dict:
            flag1=1
            print("Detail    : ",data_dict[detail][i])
        
print()
if flag==0:
    print("Employee with this Id does not exist")
if flag1==0:
    print(detail,"does not exist")

    
for k,v in data_dict.items():
    print(k," :",v)