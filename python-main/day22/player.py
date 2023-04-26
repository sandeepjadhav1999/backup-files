from turtle import Turtle


STARTING_POSITION = (0, -280)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280


class Player(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("turtle")
        self.setheading(90)
        self.penup()
        self.starting_position()

    def move_up(self):
        self.forward(MOVE_DISTANCE)

    def starting_position(self):
        self.goto(STARTING_POSITION)

    def level_up(self):
        if self.ycor() > 280:
            return True
        else:
            return False

    def game_over(self):
        self.goto(0, 0)
        self.write("GAME OVER")

