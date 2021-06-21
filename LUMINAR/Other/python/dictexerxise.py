person={'name':'john','gender':'M','age':'25','addr': '1234', 'ph':'889186189'}
data=input("what details would you want ").lower()
person.get("data",'invalid')
print(person[data])
