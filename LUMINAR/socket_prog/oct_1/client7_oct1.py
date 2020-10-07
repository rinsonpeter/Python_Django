import base64
import socket

client = socket.socket()

client.connect(("localhost", 9001))

command,filename,size = client.recv(1024).decode('ascii').split(":")
if command=='file':
    size = int(size)
    print("Size: ",size)
    with open("result/%s" % (filename), 'wb') as f:
        imagearr = client.recv(size)
        imagearrdec = imagearr.decode('ascii')
        base64encoded = ""
        while not "[endoffile]" in imagearrdec:
            base64encoded += imagearrdec
            imagearr = client.recv(size)
            imagearrdec = imagearr.decode('ascii')

        if "[endoffile]" in imagearrdec:
            imagearrdec = imagearrdec.replace("[endoffile]", "")
            base64encoded += imagearrdec

        image = base64.b64decode(base64encoded.encode('ascii'))
        f.write(image)
        f.flush()
        f.close()
