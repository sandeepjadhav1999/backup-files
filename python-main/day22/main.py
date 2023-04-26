import time
from turtle import Screen
from score import Scoreboard
from player import Player
from car import CarManager


screen = Screen()

screen.setup(width=600, height=600)
screen.tracer(0)

player = Player()
car = CarManager()
score = Scoreboard()

screen.listen()
screen.onkey(player.move_up, "Up")

game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()
    car.create_car()
    car.car_move()

    for cars in car.all_cars:
        if cars.distance(player) < 20:
            game_is_on = False
            player.game_over()

    if player.level_up():
        player.starting_position()
        car.level_up()
        score.level_up()



screen.exitonclick()