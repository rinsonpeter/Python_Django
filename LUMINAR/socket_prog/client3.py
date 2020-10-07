import socket

client = socket.socket()

client.connect(("localhost", 9001))

client.send("Hello Server".encode("ascii"))

print(client.recv(1024).decode("ascii"))

client.close()

