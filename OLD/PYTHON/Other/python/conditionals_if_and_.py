print('BMI CALCULATOR')
weight=float(input('Weight in Kg: '))
height=float(input('height in Metres: '))

BMI=weight/(height**2)
if (BMI<=18.5):
    print('underweight')
elif (BMI>18.5 and BMI<=24.9):
    print('NORMAL')
elif (BMI>24.9 and BMI<=29.9):
    print('overweighht')
elif BMI>30:
    print('Obesity')
else:
    print('you are dead')
    
    
