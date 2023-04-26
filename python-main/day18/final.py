# import colorgram
import turtle as t
import random

# colors = colorgram.extract("painting.jpg", 30)
# rgb_color=[]
#
# for color in colors:
#     r = color.rgb.r
#     g = color.rgb.g
#     b = color.rgb.b
#     new_color= (r,g,b)
#     rgb_color.append(new_color)
# print(rgb_color)


tim = t.Turtle()
tim.hideturtle()
tim.speed("fastest")
t.colormode(255)
tim.setheading(210)
tim.penup()
tim.forward(300)
tim.setheading(0)
tim.pendown()

color = [(252, 248, 242), (239, 249, 243), (253, 243, 248), (16, 113, 174), (189, 16, 63), (206, 232, 244),
         (234, 144, 73), (244, 218, 77), (170, 45, 106), (229, 124, 158), (40, 51, 119), (226, 55, 108),
         (229, 76, 59), (63, 169, 78), (112, 169, 210), (123, 191, 147), (127, 78, 48), (14, 139, 61),
         (212, 155, 8), (8, 174, 208), (151, 210, 219), (24, 97, 46), (17, 53, 99), (253, 227, 0),
         (117, 43, 35), (70, 77, 40), (3, 79, 53), (152, 208, 198), (238, 163, 184), (235, 172, 159)]

num_count = 100

for i in range(1, num_count+1):
    tim.dot(20, random.choice(color))
    tim.penup()
    tim.forward(50)
    tim.pendown()

    if i % 10 == 0:
        tim.penup()
        tim.setheading(90)
        tim.forward(50)
        tim.setheading(180)
        tim.forward(500)
        tim.setheading(0)
        tim.pendown()

screen = t.Screen()
screen.exitonclick()