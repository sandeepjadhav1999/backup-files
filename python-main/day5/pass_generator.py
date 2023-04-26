import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

length=int(input("enter the lenth of the Passwords\n"))
number=int(input("Enter How many number u want in your password:\n"))
char=int(input("Enter How many char u want in your password:\n"))
password=[]
for i in range(1,length+1):
    password+=random.choice(letters)
for i in range(1,number+1):
    password+=random.choice(numbers)
for i in range(1,char+1):
    password+=random.choice(symbols)
    
random.shuffle(password)
char=""
for i in password:
    char+=i
print(char)