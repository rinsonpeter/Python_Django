
# package socket
import socket

# 1> create a socket -> virtual identifier
server = socket.socket()

# 2> bind to an address
# socket.bind(tuple) -> tuple (host,port)
server.bind(("localhost", 9001)) #port 1024-65536 unique accross the current system

# 3> change state to listening
# socket.listen(backlog) backlog -> number of simultanious connections acceptable
server.listen(10)

print("Waiting For Client Connection")
# 4> accept client connection
# accept returns the socket of client which has connected to the current accept call
client = server.accept()
print("Client Connected")
print(client)

