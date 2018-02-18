import os

initial_list = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "si", "su", "se", "so",
    "ta", "ti", "tu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "hu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo", "nn"
]

num_list = [
    "00",
    "01",
    "02",
    "03"
]

for ini in initial_list:
    for num in num_list:
        command = "cp mi_{0}.png {1}_{0}.png".format(num, ini)
        print(command)
        os.system(command)

