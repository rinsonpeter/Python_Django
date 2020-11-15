
person={'firstname':'john','lastname':'green','DOB':'1992','birth place':'canada'}
print(person)
print(type(person))
person['children']=['natalie','ethan']
print( person)
person['children'].append('ana')
print("person['children']:",person['children'][2])
print( person)
person.get("age","invalid")
key="firstname"
print( person[key])
person.clear()
print(person)
