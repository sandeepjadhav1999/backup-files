from turtle import Turtle, Screen

tim = Turtle()


def move_forward():
    tim.forward(10)


def move_backward():
    tim.backward(10)


def move_left():
    # new_direction = tim.heading() + 10
    # tim.setheading(new_direction)
    new_direction = tim.left(10)


def move_right():
    tim.right(10)

def clear():
    tim.penup()
    tim.clear()
    tim.home()
    tim.pendown()


screen = Screen()
screen.listen()
screen.onkey(key="w", fun=move_forward)
screen.onkey(key="s", fun=move_backward)
screen.onkey(key="a", fun=move_left)
screen.onkey(key="d", fun=move_right)
screen.onkey(key="c", fun=clear)
screen.exitonclick()
