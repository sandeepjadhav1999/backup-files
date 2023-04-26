# names=input("enter the number\n").split()
# # for i in range(0,len(names)):
# #     names[i] = int(names[i])
# # print(names)
# # total_hieght=0
# # counts=0
# # for h in names:
# #     total_hieght+=h
# #     counts+=1
# # print(f'the avg hieght is {round(total_hieght/counts)}')

# #another way
# #hight=sum(names/len(names))

#calculate all the even numbers from 1 to 100
# total=0
# for i in range(0,101):
#     if i%2==0:
#         total+=i
# print(total)


#FIZZBUZZ game
for i in range(1,101):
    if i%3==0 and i%5==0:
        print("FIZZBUZZ")
    elif i%3==0:
        print("FIZZ")
    elif i%5==0:
        print("BUZZ")
    else:
        print(i)