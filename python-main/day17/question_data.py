class Quiz:
    def __init__(self, q_list):
        self.question_number = 0
        self.question = q_list
        self.score = 0

    def check_question(self):
        return self.question_number < len(self.question)

    def next_question(self):
        current_question = self.question[self.question_number]
        self.question_number += 1
        user=input(f'Q.{self.question_number} {current_question.text} (True/False): ')
        self.check_answer(user, current_question.answer)

    def check_answer(self, user, crct_answer):
        if user.lower() == crct_answer.lower():
            self.score += 1
            print("Hurray you got it right")
            print(f'your Score is {self.score}/{self.question_number}')
        else:
            print("OOPs you got it wron")
            print(f"the correct answer was {crct_answer} ")
            print(f'your Score is {self.score}/{self.question_number}')
