from turtle import Turtle


class Score(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.penup()
        self.color("white")
        self.hideturtle()
        self.goto(0, 270)
        self.scores()

    def scores(self):
        self.write(f'your Score: {self.score}', align="center", font=("Arial", 8, "normal"))

    def increase_score(self):
        self.score += 1
        self.clear()
        self.write(f'your Score: {self.score}', align="center", font=("Arial", 8, "normal"))

    def game_over(self):
        self.goto(0, 0)
        self.write("GAME OVER")

