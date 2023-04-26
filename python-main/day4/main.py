#random numbers
from html.entities import name2codepoint
import random
from re import I

random_interger=random.randint(1,10)
print(random_interger)


#rondom float numbers
random_float=random.random()
print(random_float)


#head or tails game
heads=random.randint(0,1)
if heads==1:
    print('heads')
else:
    print('tails')

#bill pay game
person=input("Enter the names, separated by a commma:\n")
name=person.split(", ")
length=len(name)
random_choice=random.randint(0,length-1)
print(f'{name[random_choice]} has to pay the bill')

#another method
choice=random.choice(name)
print(f'{choice} has to pay the bill')

fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"]
vegetables = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"]
 
dirty_dozen = [fruits, vegetables]
print(dirty_dozen[1][3])

#make the teasure
row1 = ["⬜️","⬜️","⬜️"]
row2 = ["⬜️","⬜️","⬜️"]
row3 = ["⬜️","⬜️","⬜️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
first=int(position[0])
second=int(position[1])
map[second-1][first-1]="X"
print(f"{row1}\n{row2}\n{row3}")