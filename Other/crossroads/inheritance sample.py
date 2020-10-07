class BaseClass:
    def __init__(self):  # constructor
        print('Base Class constructor')

    def set_name(self, name):
        self.name = name
        print('base class set name')


class SubClass(BaseClass):  # inherited baseclass
    def __init__(self):  # constructor
        print('Sub class  constructor')

    def set_name(self, name):
        self.name = name
        print('Sub class setname')

    def welcome(self):
        print('Welcome')

    def display_name(self):
        print("Name:", self.name)


x = BaseClass()                     #base object
y = SubClass()                   #   sub Object created
y.welcome()
y.set_name('Dongo')
y.display_name()
