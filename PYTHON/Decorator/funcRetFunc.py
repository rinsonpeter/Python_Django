#Functions is that they can also return a function as a value.

def print_msg(message):
    greeting = "Hello"
    def printer():
        print(greeting, message)

    return printer

func = print_msg("Python is awesome")
func()