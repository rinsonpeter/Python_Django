import random

number = random.randint(0,10) # or you could assaign a static nmber

guess=int(input("guess the number i have in mind(0to 10)"))

while True:
    if (guess==number):
        break
    else:
        guess=(int(input('nope try again ')))
print("you guessed it right",number)
