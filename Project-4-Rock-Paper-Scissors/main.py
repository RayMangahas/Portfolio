import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇

game_images = [rock, paper, scissors]


user = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
computer = random.randint(0,2)
print(game_images[user])
print("Computer chose:")
print(game_images[computer])


if user >= 3 or user <0:
  print("invalid.")
else:
  if user ==0 and computer ==2:
    print("You win")
  elif computer == 0 and user ==2:
    print("you lose.")
  elif computer > user:
    print("You lose")
  elif user < computer:
    print("You win.")
  elif computer == user:
    print("draw.")
  elif user >= 3 or user <0:
    print("invalid.")
  else:
    print("wrong number, you lose.")


