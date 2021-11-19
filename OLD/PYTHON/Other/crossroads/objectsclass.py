class sample_class:

    def hello(self,n):     # object of class can access function and variables
        self.name=n        # x.name='kiran'    y.name='jininsh'

    def printname(self):
        print(self.name)

x = sample_class()
y = sample_class()

x.hello('kiran')
y.hello('jinish')

x.printname()
y.printname()

