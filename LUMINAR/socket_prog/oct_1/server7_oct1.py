import base64
import socket

server = socket.socket()

server.bind(("localhost",9001))

server.listen(10)

while True:
    client,addr = server.accept()
    print("Client Connected: ",addr)
    with open('screenshot1.png', 'rb') as f:
        image = f.read()
        print("File Size: ",len(image))
        f.close()
        fileb64encoded = base64.b64encode(image)
        fileb64encoded = fileb64encoded.decode('ascii')
        size = len(fileb64encoded)
        print("Base64 Size: ", size)
        client.send(("file:%s:%d" % ('screenshot1.png', size))
                    .encode("ascii"))
        client.send(fileb64encoded.encode('ascii'))
        client.send("[endoffile]".encode('ascii'))
        client.close()
