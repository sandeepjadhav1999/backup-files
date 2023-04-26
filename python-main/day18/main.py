import turtle
from turtle import Turtle, Screen
import random

timmy = Turtle()
turtle.colormode(255)
timmy.shape("turtle")
timmy.color("blue")
# timmy.width(10)
timmy.speed("fastest")


# def move():
#     timmy.forward(100)
#     timmy.left(90)
# for i in range(0,4):
#     move()

# for i in range(15):
#     timmy.forward(10)
#     timmy.penup()
#     timmy.forward(10)
#     timmy.pendown()
#
# def side(num_side):
#     for i in range(num_side):
#         angle=360/num_side
#         timmy.forward(100)
#         timmy.right(angle)
#     for i in range(num_side):
#         angle=360/num_side
#         timmy.forward(100)
#         timmy.left(angle)
#
# for i in range(3,11):
#     side(i)


def random_color():
    r=random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    color = (r, g, b)
    return color

#
# direction = [90, 180, 270]
#
#
# for i in range(100):
#     timmy.color(random_color())
#     timmy.forward(30)
#     timmy.setheading(random.choice(direction))


def random_circle(set_num):
    for i in range(int(360/set_num)):
        timmy.color(random_color())
        timmy.circle(100)
        timmy.setheading(timmy.heading()+set_num)


random_circle(5)

screen = Screen()
screen.exitonclick()