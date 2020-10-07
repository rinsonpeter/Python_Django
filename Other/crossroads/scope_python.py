def check_scope():
    def do_local():
        test='local test'
    def do_nonlocal():
        nonlocal test
        test="nonlocal test"
    def do_global():
        global test
        test="global test"

    test= 'default'
    do_local()
    print('test after do local: ',test)
    do_nonlocal()
    print('test after nonlocal:',test)
    do_global()
    print('test after global', test)

check_scope()
print('test after main: ',test)


