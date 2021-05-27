class X():
    def hi(self):
        print('inside X')

class A(X):
    def hi(self):
        print('inside A')

class B(X):
    pass
    # def hi(self):
    #     print('inside B')

class C(B,A):
    pass

# x=int(input("enter a number: "))
obj = C()
obj.hi()

print("-------------------------------------------------")
print(C.mro())
print("-------------------------------------------------")
print(C.__mro__)
