
import socket

# 1> create a virtual identifier
client = socket.socket()

print("Connecting...")
# 2> connect to an address
# socket.connect(address) address is server bound socket address
client.connect(("localhost", 9001))
print("Connected")



