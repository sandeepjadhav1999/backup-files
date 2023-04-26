import random 
import art
easy_level=10
hard_level=5
turns=0

def check(guess,answer,turns):
    if guess>answer:
        print("Too high")
        return turns - 1
    elif answer> guess:
        print("too low")
        return turns - 1
    else:
        print(f"you Got it the answer was {answer}")


def set_difficulty():
    level=input("Choose the level type hard or easy: ")
    if level =="easy":
        return easy_level
    else:
        return hard_level

def game():
    print(art.logo)
    print("Welcome to number guess Game\nI'm thinking of a number between 1 and 100")
    answer=random.randint(1,100)
    turns=set_difficulty()
    

    guess=0
    while guess !=answer:
        print(f'you have {turns} attempts remaining to guess the number')
        guess=int(input("Make a guess: "))
        turns=check(guess,answer,turns)
        if turns == 0:
            print("You Lose u hv no more lives left")
            return
        else:
            print("make a guess")
game()