import base64
import socket

client = socket.socket()

client.connect(("localhost",9001))

str1bytes = client.recv(1024)
b64bytes = base64.b64decode(str1bytes)
b64string = b64bytes.decode('ascii')

print("Decoded: ",b64string)

print("")