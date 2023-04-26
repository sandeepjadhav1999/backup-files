import random
import hangman_stages
import hangman_words


lives=6
choice=random.choice(hangman_words.words_list)
print(f'the solution {choice}')
display=[]
length=len(choice)
for _ in range(length):
    display.append("_")

end_of_game=False
while not end_of_game:
    guess=input("guess a letter:\n")
    for letter in range(length):
        position=choice[letter]
        if position==guess:
            display[letter]=position
    
    if guess not in choice:
        lives-=1
        if lives == 0:
            end_of_game=True
            print("You lose")
    
    print(f"{' '.join(display)}")
    
    print(hangman_stages.stages[lives])
    if "_" not in display:
        end_of_game=True
        print("GAME OVER")
   