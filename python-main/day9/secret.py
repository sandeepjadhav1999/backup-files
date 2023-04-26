import art
import os

print(art.logo)


bids={}
bids_finished=True

def find_highest_bid(bidding_record):
    highest_bid = 0
    winner = ""
    for bidder in bidding_record:
        bid_amount = bidding_record[bidder]
        if bid_amount > highest_bid:
            highest_bid = bid_amount
            winner = bidder
    print(f"The winner is {winner} with a bid of ${highest_bid}")

while bids_finished:
    name=input("Enter your Name:\n")
    price=int(input("enter your Bids:\n"))
    bids[name]=price
    should_contuine=input("do you wish to continue Enter yes or no:\n")
    if should_contuine =="no":
        bids_finished=False
        find_highest_bid(bids)
    elif should_contuine=="yes":
        os.system('cls')
