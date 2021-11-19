blog_post=['',"Math in python","","HTTP req in python", "tutorial in pythn"]
for post in blog_post:
    if (post==""):
        continue
    else:
        print(post)
print("---------------------------")

mystring='this is a string'

for x in mystring:
    print(x)
for x in mystring:
    print(x,end="")
print("---------------------------")

for x in range(0,10,2):
    print(x)

print("---------------------------")

person={'Name':'Dongo','age':25, 'gender':'female'}
for ky in person:
    print(ky,':', person[ky])


print("---------------------------")

blog_post={'python':["Math in python","HTTP req in python", "tutorial in pythn"],'java':['java is powerful','java is simple']}

for category in blog_post:
    print('POST ABOUT',category.upper())
    print('')
    for post in blog_post[category]:
        print(post)
    print('')    
    
    
