import socket

server = socket.socket()

server.bind(("localhost", 9001))

server.listen(10)

print("Waiting for client")
client, addr = server.accept()
# accept returns two values returned as a tuple
# 1st value -> client socket, 2nd addr -> raddr
print("Client connected")
# socket.recv(buffersize) buffersize maximum amount of data
# buffersize -> bytes -> 1024 -> 1k
# recv returns a byte array
print(client.recv(1024).decode('ascii'))

client.close()
server.close() # gracefully close
# at a time a system can service only one port
# multithreaded env if the thread not stoped connection becomes stale
