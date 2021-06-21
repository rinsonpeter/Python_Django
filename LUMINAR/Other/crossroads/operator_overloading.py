class sample:

    def setname(self, name):
        self.name = name
        return name

    def __add__(self, other):
        name = self.name + " " + other.name
        return name
first_name = sample()  # object
second_name = sample()

first_name.setname('Kad')
second_name.setname('Kadi')

fullname = first_name + second_name
# fullname=str(first_name.name)+" "+str(second_name.name)
print(fullname)
