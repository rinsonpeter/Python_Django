import socket

server = socket.socket()

server.bind(("localhost", 9001))

server.listen(10)

while True:
    client,addr = server.accept()
    print(addr)
    with open("book.txt",'r') as f:
        content = f.read()
        print(int(len(content)/1024), " Kb")
        div = int(len(content)/1024)
        divi = int(len(content)%1024)
        client.sendall("file:book.txt".encode("ascii"))

        i = 0
        for i in range(div):
            data = content[i*1024:i*1024+1024]
            client.sendall(data.encode("ascii"))

        if divi!=0:
            data = content[i*1024:]
            client.sendall(data.encode("ascii"))

        client.send("[endoffile]".encode("ascii"))