print('welcome to pizza place')
size=input('which size pizza do u want S M L: ')
pepperoni=input('do u want pepperoni in ur pizza Y or N: ')
cheese=input('do u want double cheeze on your pizza Y or N :')

bill=0
if size == 'S':
    bill+=3
elif size == "M":
    bill+=5
else:
    bill +=7

if pepperoni =="Y":
    if size =="S":
        bill+=2
    else:
        bill+=5
if cheese =="Y":
    bill+=1

print(f'your final bill is {bill}')