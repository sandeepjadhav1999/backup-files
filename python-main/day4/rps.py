import random


rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
images_choice=[rock,paper,scissors]
user=int(input('enter your choice 0 for Rock, 1 for Papper, 2 for Scissors:\n'))
if user>=3 or user<0:
    print('invalid Number')
else:
    print(images_choice[user])
    computer_choice=random.randint(0,2)
    print(f'computer Choice\n{computer_choice}')
    print(images_choice[computer_choice])

    if user==0 and computer_choice==2:
        print("you Win")
    elif computer_choice==0 and user==2:
        print("you Lose")
    elif computer_choice>user:
        print("you Lose")
    elif user>computer_choice:
        print("you win")
    elif user == computer_choice:
        print("draw")
