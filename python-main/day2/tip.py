print('welcome to tip calculator')
amount=float(input('enter your bill: '))
tip= int(input('enter the tip you would like to give (10,12,15) : '))
split=int(input('how many members to split the bill: '))

tips=tip/100*amount+amount
splits=tips/split

print(f'each person has to pay {splits} amount')