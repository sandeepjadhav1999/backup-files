#simple function
# def my_functio():
#     print("hi ")
#     print("hello ")
#     print("bye ")
# my_functio()

# #function with input
# def greet_with_input(name):
#     print(f'hi {name}')
#     print(f'how ru today {name}')
# greet_with_input("sandeep")

#function with more than 1 input
def greet(name,location):
    print(f'hi, my name is {name}')
    print(f'i stay in {location}')
#greet("sandeep","bangalore")

#keyword arguments 
#greet(location="bangalore",name="sandeep")

#paint coverage problem
import math
# height=int(input("enter the hieght:\n"))
# weight=int(input("enter the weight:\n"))
# coverage=5

# def paint(h,w,c):
#     total=math.ceil((h*w)/c)
#     print(total)
#paint(h=height,w=weight,c=coverage)



def prime_checker(number):
    is_prime=True
    for i in range(2,number):
        if number%i==0:
            is_prime=False
    if is_prime:
        print("its a prime")
    else:
        print("not a prime")
n=int(input("enter the numbr:\n"))
prime_checker(number=n)

