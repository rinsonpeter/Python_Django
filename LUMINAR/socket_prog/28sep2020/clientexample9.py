import socket

client = socket.socket()

client.connect(("localhost", 9001))

data = client.recv(1024).decode("ascii")
if data.startswith("file:"):
    filename = data.split(":")[-1]
    with open("result/%s" % (filename), "w") as f:
        data = client.recv(1024).decode("ascii")
        while not '[endoffile]' in data:
            f.write(data)
            f.flush()
            data = client.recv(1024).decode("ascii")
        data = data.replace("[endoffile]","")
        f.write(data)
        f.flush()

        f.close()