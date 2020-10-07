import socket

server = socket.socket()

server.bind(("localhost",9001))

server.listen(10)

while True:
    print("Waiting For client..")
    client, addr = server.accept()
    print("Client connected ", addr)
    str1 = client.recv(1024) # buffer size 1k 1k data maximum data that can be
    # received
    str1 = str1.decode('ascii')

    print("Message from client ",str1)

    str2 = "Hello Client!"
    client.send(str2.encode('ascii'))

    client.close() # gracefully disconnect the client
    print("Client disconnected!")

# client -> input a name
# client -> send -> Hello I am {name}
# server -> print -> Hello {name} send
# client -> print -> Hello {name}
