class CrossroadsTeam:
    year=2020
    def __init__(self,name,age,place):
        self.name=name
        self.age=age
        self.place=place

    def add_age(self):
        self.age=self.age+1

    def relocate(self,place):
        self.place=place

    def display(self):
        print('Year :',CrossroadsTeam.year,\
              '\nName :',self.name,\
                '\nAge  :',self.age,\
                 '\nPlace:',self.place)
x=CrossroadsTeam('dingo',25,'kochi')
y=CrossroadsTeam('kad',26,'cochin')

x.display()
print('---------------------------------')
y.display()

