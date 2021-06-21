import random

color=['violet','indigo','blue','green','yellow','orange','red']

while True:
    colors=color[random.randint(0,len(color)-1)]
    
    guess=input("Try to Guess the color in my mind: " )

    while True:
        if (colors==guess.lower()):
            break
        else:
            guess=input("WRONG GUESS, TRY AGAIN: " )

    print("you guessed it right:",colors.upper())

    play_again=input("Play again? Type 'no' to quit:")
    if play_again.lower()=='no':
        break

print("BYE")    
    
        
    
