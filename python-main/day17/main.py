from data import question_data
from question_bank import Question
from question_data import Quiz

question_bank = []

for question in question_data:
    question_text = question['text']
    question_answer = question['answer']
    new_question = Question(question_text, question_answer)
    question_bank.append(new_question)

quiz = Quiz(question_bank)

while quiz.check_question():
    quiz.next_question()

print("you have completed the Quiz")
print(f'your final score is {quiz.score}/{quiz.question_number}')
