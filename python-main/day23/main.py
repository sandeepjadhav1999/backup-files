placeholder = "[name]"

with open("./Input/Names/invited_names.txt") as letter_names:
    new_name = letter_names.readlines()

with open("./Input/Letters/starting_letter.txt") as letter_content:
    new_letter = letter_content.read()
    for name in new_name:
        new_names = name.strip()
        new = new_letter.replace(placeholder, new_names)
        with open(f"./Output/ReadyToSend/letter_for_{new_names}.txt", mode="w") as final_letter:
            final_letter.write(new)
