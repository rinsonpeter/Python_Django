import socket
import time
import _thread

client = socket.socket()
client.connect(("localhost", 9001))
clientname = input("Enter Name: ")
client.sendall(clientname.encode("ascii"))

def client_thread(client):
    while True:
        message = client.recv(1024)
        message = message.decode("ascii")
        fromname,message = message.split(":")
        print("New Message From: %s\nMessage: %s" % (fromname,message))

clientthread = _thread.start_new_thread(client_thread,(client,))

while True:
    toclient = input("Enter To Client: ")
    message = input("Enter Message: ")
    client.sendall(("%s:%s" % (toclient,message)).encode("ascii"))