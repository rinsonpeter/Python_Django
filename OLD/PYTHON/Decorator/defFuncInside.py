#In Python, we can also define a function inside a function:

def print_msg(message):
    greeting = "Hello"
    def printer():
        print(greeting, message)

    printer()


print_msg("Python is awesome")