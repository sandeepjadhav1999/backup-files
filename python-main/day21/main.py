from turtle import Screen
from paddle import Paddle
from ball import Ball
from score_board import Score
import time

screen = Screen()
screen.setup(width=800, height=600)
screen.bgcolor("black")
screen.title("PONG")
screen.tracer(0)

l_paddle = Paddle((350, 0))
r_paddle = Paddle((-350, 0))
ball = Ball()
l_score = Score((-100, 260))
r_score = Score((100, 260))


screen.listen()
screen.onkeypress(l_paddle.up, "Up")
screen.onkeypress(l_paddle.down, "Down")

screen.onkeypress(r_paddle.up, "w")
screen.onkeypress(r_paddle.down, "s")

is_game = True

while is_game:
    time.sleep(0.1)
    screen.update()
    ball.move()
    if ball.ycor() > 280 or ball.ycor() < -280:
        ball.bounce()

    if ball.distance(l_paddle) < 50 and ball.xcor() > 320 or ball.distance(r_paddle) < 50 and ball.xcor() < -320:
        ball.bounce_back()

    if ball.xcor() > 380:
        ball.reset_ball()
        l_score.increment_score()

    if ball.xcor() < -380:
        ball.reset_ball()
        r_score.increment_score()

screen.exitonclick()
