from art import logo,vs
from data import data
import random
import os

def format(account):
    account_name=account["name"]
    account_description=account["description"]
    account_place=account["country"]
    return f'{account_name}, a {account_description}, from {account_place}'

def check(guess,a_follower,b_follower):
    if a_follower>b_follower:
        return guess=="a"
    else:
        return guess=="b"

print(logo)
score=0
is_game_continue=True
account_b=random.choice(data)

while is_game_continue:
    account_a=account_b
    account_b=random.choice(data)
    while account_a == account_b:
        account_b=random.choice(data)

    account_name=account_a["name"]
    account_description=account_a["description"]
    account_place=account_a["country"]

    print(f'compare A: {format(account_a)}')
    print(vs)
    print(f'Compare B: {format(account_b)}')

    guess=input("Who has more followers ? Type A or B: ").lower()

    a_account_followers=account_a["follower_count"]
    b_account_followers=account_b["follower_count"]

    final_check=check(guess,a_account_followers,b_account_followers)

    os.system('cls')

    if final_check:
        score+=1
        print(f"Hurray you got it Right, your score is {score}")
    else:
        is_game_continue=False
        print(f"OOPs you got it wrong, your score is {score}")