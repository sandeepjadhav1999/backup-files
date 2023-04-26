#calculator 
import art

#add
def add(n1,n2):
    return n1+n2

#Subtract
def subtract(n1,n2):
    return n1-n2

#Multiple
def multiply(n1,n2):
    return n1*n2

#divide
def divide(n1,n2):
    return n1/n2

operations={
    "+":add,
    "-":subtract,
    "*":multiply,
    "/":divide
}
def calculator():
    print(art.logo)
    num1=float(input("enter the First Number:\n"))
    for symbol in operations:
        print(symbol)
        wish_continue=True
    while wish_continue:
        operation=input("enter the operation you want to perform:\n")
        num2=float(input("enter the Next Number:\n"))
        operation_to_perform=operations[operation]
        answer=operation_to_perform(num1,num2)
        print(f'{num1} {operation} {num2}= {answer}')
        next= input("do you wish to continue if yes Type y, do you want to start over than type s or wish to exit type n:\n")
        if next == "y":
            num1=answer
        elif next == "s":
            calculator()
        else:
            wish_continue= False

calculator()

