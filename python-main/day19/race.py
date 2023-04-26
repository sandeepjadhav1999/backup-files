from turtle import Turtle, Screen
import random

is_game = False
screen = Screen()
screen.setup(width=500, height=400)
user_best = screen.textinput(title="Make YOur Bet", prompt="Which Turtle will win the race: ")


colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple']
position = [-70, -40, -10, 20, 50, 80]
all_turtle = []


if user_best:
    is_game = True

for i in range(0, 6):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(colors[i])
    new_turtle.penup()
    new_turtle.goto(x=-230, y=position[i])
    all_turtle.append(new_turtle)

while is_game:
    for turtle in all_turtle:
        if turtle.xcor() > 230:
            winning_color = turtle.pencolor()
            is_game = False
            if user_best == winning_color:
                print(f"you've won, The {winning_color} won the race ")
            else:
                print(f"you've lost, The {winning_color} won the race ")

        random_dist = random.randint(1, 10)
        turtle.forward(random_dist)


screen.exitonclick()