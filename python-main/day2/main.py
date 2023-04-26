#write a program thats adds a digit in a 2 digit number Eg: 36 : 3+6=9

num=input("enter 2 digit number: ")
print(int(num[0])+int(num[1]))



#BMI calculator

weight=float(input('enter your weight: '))
height=float(input('enter your height'))
BMI=weight/(height**2)
print("your BMi is" + str(BMI))

#Life in weeks

age=int(input('Enter your Current age: '))
years=90-age
months=years*12
weeks=years*52
days=years*365
print(f'you have {days} days {weeks} weeks  {months} months and {years} years left')