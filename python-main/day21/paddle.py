from turtle import Turtle


class Paddle(Turtle):
    def __init__(self, position):
        super().__init__()
        self.shape("square")
        self.shapesize(stretch_wid=5, stretch_len=1)
        self.color("white")
        self.penup()
        self.goto(position)
        self.x_cor = 10
        self.y_cor = 10

    def up(self):
        y_cor = self.ycor() + self.y_cor
        self.goto(self.xcor(), y_cor)

    def down(self):
        y_cor = self.ycor() - self.y_cor
        self.goto(self.xcor(), y_cor)
