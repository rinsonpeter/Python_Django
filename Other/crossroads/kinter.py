from tkinter import *

window=Tk()
window.configure(bg='#79D02D')
window.geometry("500x500")
window.title("Calculator")

lb=Label(window,text='Welcome')
lb.pack()
def hello():
    print('button clicked')

bt1=Button(text="ok",width=30,height=10,bg="red",fg="black",command=hello)

bt2=Button(text="ok",width=30,height=10,bg="red",fg="black",command=hello)


bt1.pack()
bt2.pack()
window.mainloop()
