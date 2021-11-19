class Even:
    def __init__(self, max):
        self.n = 2
        self.max = max
        print("inside __init")

    def __iter__(self):
        print("inside iter")
        return self


    def __next__(self):
        if self.n <= self.max:
            result = self.n
            self.n += 2
            return result
        else:
            raise StopIteration

numbers = Even(10)

print(next(numbers))
print(next(numbers))
print(next(numbers))
print(next(numbers))
print(next(numbers))
print(next(numbers))