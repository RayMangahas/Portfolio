#If the bill was $150.00, split between 5 people, with 12% tip. 

#Each person should pay (150.00 / 5) * 1.12 = 33.6
#Format the result to 2 decimal places = 33.60

#Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

#Write your code below this line 👇
print('Welcome to the tip Calculator! ')
cost = input('What was the total bill? $')
cost_float = float(cost)
tip = input('How much tip would you like to give? 10, 12, or 15? ')
tip_float = float(tip)
people = input('How many people to split the bill? ')
people_float = float(people)
bill = round(cost_float * (1 + (tip_float/100)) / people_float, 2)
bill = "{:.2f}".format(bill)
print(f'Each person should pay: ${bill}')