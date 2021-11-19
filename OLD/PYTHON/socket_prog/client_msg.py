import socket
client=socket.socket()
client.connect(("localhost",9001))
print("connected")
name=input("enter your name: ")
x="I am "+name
print("sending data")

client.send(x.encode("ascii"))
print("message from server: ",client.recv(1024).decode("ascii"))
client.close()
