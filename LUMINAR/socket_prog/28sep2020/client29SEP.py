import socket

client = socket.socket()

client.connect(("localhost",9001))

opt = 0
while opt!=4:
    print("MENU")
    opt = int(input("1> LIST DIRECTORY, 2> CHANGE DIRECTORY, 3> DOWNLOAD FILE, 4> EXIT "))
    if opt==1:
        client.send('listdir:all'.encode('ascii'))
        msg = client.recv(1024).decode('ascii')
        while not '[endoflisting]' in msg:
            print(msg)
            msg = client.recv(1024).decode('ascii')
        print(msg.replace('[endoflisting]',''))
    elif opt==2:
        directory = input('Enter Directory: ')
        client.send(('change:%s' % (directory)).encode('ascii'))