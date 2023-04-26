#Dictionary

# dictionary={
#     "Bug": "An error in a program that prevents the program from running as expected.", 
#     "Function": "A piece of code that you can easily call over and over again."
# }

#to get values
#print(dictionary["Bug"])

#loop through dictionary
# for i in dictionary:
#     print(i)
#     print(dictionary[i])

#Edit an exsiting dict
#dictionary["Bug"]="hiiii"
#print(dictionary)

#to empty an dictionary
#dictionary={}

#student grades

# student_mrks={
#     "sandeep":91,
#     "chetan":85,
#     "sdvsjd":66
# }

# student_grades={}

# for student in student_mrks:
#     marks=student_mrks[student]
#     if marks>=90:
#         student_grades[student]="outStanding"
#     elif marks>=80:
#         student_grades[student]="Excellent"
#     elif marks>=70:
#         student_grades[student]="acceptable"
#     else:
#         student_grades[student]="fail"

# print(student_grades)


#coding excersie

travel_log = [
{
  "country": "France",
  "visits": 12,
  "cities": ["Paris", "Lille", "Dijon"]
},
{
  "country": "Germany",
  "visits": 5,
  "cities": ["Berlin", "Hamburg", "Stuttgart"]
},
]

def ading_new_country(country_visited,times_visisted,cities_visited):
    new_country={}
    new_country["country"]=country_visited
    new_country["visits"]=times_visisted
    new_country["cities"]=cities_visited
    travel_log.append(new_country)
ading_new_country("russia",6,["mascow","sait petersurb"])
print(travel_log)

