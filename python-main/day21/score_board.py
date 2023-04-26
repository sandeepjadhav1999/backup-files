from turtle import Turtle


class Score(Turtle):
    def __init__(self, position):
        super().__init__()
        self.hideturtle()
        self.color("White")
        self.penup()
        self.score = 0
        self.goto(position)
        self.write(f'{self.score}', align="center", font=("Arial", 24, "normal"))

    def increment_score(self):
        self.clear()
        self.score += 1
        self.write(f'{self.score}', align="center", font=("Arial", 24, "normal"))
