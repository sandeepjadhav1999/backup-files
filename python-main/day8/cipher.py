import art
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def final(chipher_text,shift_amount,cipher_direction):
    final_text=""
    if cipher_direction == "decode":
            shift_amount*=-1
    for i in chipher_text:
        if i in alphabet:
            position=alphabet.index(i)
            new_position=position+shift_amount
            final_text+=alphabet[new_position]
        else:
            final_text+=i
    print(f'the {cipher_direction} msg is {final_text}')



print(art.logo)
is_finish=True
while is_finish:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    text = input("Type your message:\n")
    shift = int(input("Type the shift number:\n"))
    shift=shift%26
    final(chipher_text=text,shift_amount=shift,cipher_direction=direction)
    result=input("do you wish to continue is yes enter yes or no:\n")
    if result=="no":
        is_finish=False
        print("BYE")


