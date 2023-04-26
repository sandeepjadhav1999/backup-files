import pandas
from turtle import Turtle, Screen

image = "inde16.gif"

screen = Screen()
screen.title("GUESS the STATES")
screen.setup(width=850, height=890)
screen.addshape(image)

tim = Turtle()
tim.shape(image)

data = pandas.read_csv("india.csv")
state_list = data.state.to_list()


guessed_answer = []

while len(guessed_answer) < 29:
    answer = screen.textinput(title=f"{len(guessed_answer)}/29 States", prompt="What's another state name: ").title()

    if answer == "Exit":
        missed_state = []
        for state in state_list:
            if state not in guessed_answer:
                missed_state.append(state)
        new_data = pandas.DataFrame(missed_state)
        new_data.to_csv("states_to_learn.csv")
        break
    if answer in state_list:
        guessed_answer.append(answer)
        t = Turtle()
        t.hideturtle()
        t.penup()
        guess_answer = data[data.state == answer]
        t.goto(int(guess_answer.x), int(guess_answer.y))
        t.write(answer)

