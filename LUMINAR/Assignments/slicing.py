if __name__ == '__main__':
 
    l = list(range(1, 5))
    print(l)    # [1, 2, 3, 4]
    l = l[:-2]
    print(l)    # [1, 2, 3]


    numbers = [50, 60, 70, 80]
    del numbers[1:3]
    print(numbers) # [50, 70, 80]
