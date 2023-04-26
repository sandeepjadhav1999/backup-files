import random
import os
import art

def card_dealter():
    """"it returns a random card from the deck."""
    cards=[11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    card= random.choice(cards)
    return card

def calculat(cards):
    """it is used to calcuclate the sum of the cards"""
    if sum(cards)==21 and len(cards)==2:
        return 0
    if 11 in cards and sum(cards)>21:
        cards.remove(11)
        cards.append(1)
    return sum(cards)

def compare(user_score,computer_score):
    if user_score == computer_score:
        return "Draw"
    elif computer_score == 0:
        return "lose, opponent has a blackjack"
    elif user_score ==0:
        return "You Win u have a blackjack"
    elif user_score>21:
        return "you lose u hv more than 21"
    elif computer_score>21:
        return "you win oppenet has more than 21"
    elif user_score >computer_score:
        return "you win"
    else :
        return "you lose"
#Creating a user and computer cards
def game():
    print(art.logo)
    user_card=[]
    computer_card=[]
    is_game_over=False

    for _ in range(2):
        user_card.append(card_dealter())
        computer_card.append(card_dealter())

    while not is_game_over:
        user_score=calculat(user_card)
        computer_score=calculat(computer_card)
        print(f'your card {user_card} and current score : {user_score}')
        print(f'computer fist card {computer_card[0]}')


        if user_score == 0 or computer_score ==0 or user_score >21:
            is_game_over =True
        else:
            user_deal=input("type y to deal a new card, n to pass: ")
            if user_deal =="y":
                user_card.append(card_dealter())
            else:
                is_game_over=True
    while computer_score !=0 and computer_score <17:
        computer_card.append(card_dealter())
        computer_score=calculat(computer_card)

    print(f'your finals cards {user_card} and final score {user_score}')
    print(f'computer final card {computer_card} and final score {computer_score}')
    print(compare(user_score,computer_score))

while input("Do u want to play a game of blackjack type y or n: ")=="y":
    os.system('cls')
    game()