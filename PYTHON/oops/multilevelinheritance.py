class parent:
    def m1(self):
        print("inside parent")

class child(parent):     #multilevel
    def m2(self):
        print("inside child")

class subchild(child):   #multilevel
    def m3(self):
        print("inside sub child")

subch=subchild()
subch.m1()
subch.m2()
subch.m3()

ch=child()
ch.m1()
ch.m2()

pr=parent()


