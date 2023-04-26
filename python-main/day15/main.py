MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}


def is_resource_sufficient(order_ingredients):
    for item in order_ingredients:
        if order_ingredients[item] >= resources[item]:
            print(f"Sorry there is not enough item {item}")
            return False
    return True


def payment_process():
    print("Please insert Coins")
    total = int(input("how many quarters"))*0.25
    total += int(input("how many dimes")) * 0.1
    total += int(input("how many nickles")) * 0.05
    total += int(input("how many pennies")) * 0.01
    return total


def transaction_successful(money_recieved, drink_cost):
    if money_recieved >= drink_cost:
        change = round(money_recieved - drink_cost,2)
        global profit
        profit += drink_cost
        print(f'Here is your Change {change}')
        return True
    else:
        print("sorry there is not enough Money")
        return False

def make_coffee(order_ingredients, drink_name):
    for item in order_ingredients:
        resources[item] -= order_ingredients[item]
    print(f'here is your Drink {drink_name}')


is_on = True
while is_on:
    choice = input("What would you like? (espresso/latte/cappuccino):")
    if choice == "off":
        is_on = False
    elif choice == "report":
        print(f"water: {resources['water']} ")
        print(f"milk{resources['milk']}")
        print(f"coffee: {resources['coffee']}")
        print(f'Profit: {profit}')
    else:
        drink = MENU[choice]
        if is_resource_sufficient(drink["ingredients"]):
            payment = payment_process()
            if transaction_successful(payment, drink['cost']):
                make_coffee(drink["ingredients"], choice)



