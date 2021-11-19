import os
import socket
import _thread

server = socket.socket()

server.bind(("localhost", 9001))

server.listen(10)


def client_thread(client):
    current_dir = os.curdir
    print('Current Directory: ', current_dir)
    while True:
        msg = client.recv(1024).decode('ascii')
        print(msg)
        command, args = msg.split(":")
        if command == 'listdir':
            files = os.listdir(current_dir)
            client.send('listing'.encode('ascii'))
            for file in files:
                if os.path.isdir("%s/%s" % (current_dir, file)):
                    client.send(("%s %s" % (file, "(d)")).encode('ascii'))
                else:
                    client.send(("%s %s" % (file, "(f)")).encode('ascii'))
            client.send('[endoflisting]'.encode('ascii'))
        elif command == 'change':
            if args == '[parent]':
                abspath = os.path.abspath(current_dir)
                new_dir = os.path.sep.join(abspath.split(os.path.sep)[0:-2])
                current_dir = new_dir
            else:
                current_dir = os.path.abspath("%s/%s" % (current_dir, args))
            print("Changed To %s" % (current_dir))
        elif command == 'downloadfile':
            filename = args
            if os.path.exists("%s/%s" % (current_dir, filename)):
                file = "%s/%s" % (current_dir, filename)
                with open(file, 'r') as f:
                    content = f.read()
                    print("%d Kb" % (int(len(content) / 1024)))
                    div = int(len(content) / 1024)
                    divi = int(len(content) % 1024)

                    client.send(("file:%s" % (filename)).encode('ascii'))
                    i = 0
                    for i in range(div):
                        data = content[i * 1024:i * 1024 + 1024]
                        client.send(data.encode('ascii'))

                    if divi != 0:
                        data = content[i * 1024:]
                        client.send(data.encode('ascii'))

                    client.send("[endoffile]".encode('ascii'))
            else:
                client.send('file:no file'.encode('ascii'))


while True:
    client, address = server.accept()
    print('Client Connected!')
    _thread.start_new_thread(client_thread, (client,))
