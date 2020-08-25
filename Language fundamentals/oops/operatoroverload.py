class book:
    def __init__(self,pages):
        self.pages=pages

    def __str__(self):
        return str(self.pages)

    def __add__(self,other):
        return book(self.pages+other.pages)

    def __sub__(self, other):
        return book(self.pages - other.pages)

ob=book(100)
ob2=book(200)
print(ob+ob2)
print(ob2-ob)

