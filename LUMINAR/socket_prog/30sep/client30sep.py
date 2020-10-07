import socket

client = socket.socket()

client.connect(("localhost", 9001))

opt = 0
while opt != 4:
    print("MENU")
    opt = int(input("1> LIST DIRECTORY, 2> CHANGE DIRECTORY, 3> DOWNLOAD FILE, 4> EXIT "))
    if opt == 1:
        client.send('listdir:all'.encode('ascii'))
        msg = client.recv(1024).decode('ascii')
        while not '[endoflisting]' in msg:
            print(msg)
            msg = client.recv(1024).decode('ascii')
        print(msg.replace('[endoflisting]', ''))
    elif opt == 2:
        directory = input('Enter Directory: ')
        client.send(('change:%s' % (directory)).encode('ascii'))
    elif opt == 3:
        file = input('Enter File Name: ')
        client.send(("downloadfile:%s" % (file)).encode('ascii'))
        msg = client.recv(1024).decode('ascii')
        if msg.startswith('file'):
            filename = msg.split(":")[-1]
            print("Downloading File: %s" % (filename))
            with open('result/%s' % (filename), 'w') as f:
                data = client.recv(1024).decode('ascii')
                while not '[endoffile]' in data:
                    f.write(data)
                    f.flush()
                    data = client.recv(1024).decode('ascii')

                data = data.replace('[endoffile]', '')
                f.write(data)
                f.flush()

                f.close()
                print("File Downloaded!")
