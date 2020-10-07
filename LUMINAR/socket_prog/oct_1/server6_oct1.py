import base64
import socket

server = socket.socket()

server.bind(("localhost",9001))

server.listen(10)

while True:
    client,addr = server.accept()
    print("Client Connected ",addr)
    str1 = "Hello Client!"
    str1bytes = str1.encode('ascii')
    b64bytes = base64.b64encode(str1bytes)
    b64string = b64bytes.decode('ascii')

    print("Encoded: ",b64string)
    client.send(b64string.encode('ascii'))
    client.close()