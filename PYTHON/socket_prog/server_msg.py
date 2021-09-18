import socket
server=socket.socket()

server.bind(("localhost",9001))
server.listen(10)

while True:
    print("Waiting")
    client,addrs=server.accept()
    print("connected",addrs)
    str1=client.recv(1024)
    msg=str1.decode("ascii")
    arr=msg.split(" ")
    print("message from client:",msg)
    str2="hello "+arr[-1]
    client.send(str2.encode("ascii"))
    client.close()
    print("client disconnected")