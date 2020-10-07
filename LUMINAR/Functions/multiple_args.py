# def func_args(arg1,*args,arg2):
#     print('arg1: ', arg1)
#     print('arg2: ', arg2)
#     print('args: ', args)
#     print(type(args))
# func_args(2,0,1,2,4,3,4,arg2=4)
print("-----------------------------------------------")
def func_kwargs_positional(arg1, arg2, **kwargs):
    print('arg1: ', arg1)
    print('arg2: ', arg2)
    print('kwargs: ', kwargs)

func_kwargs_positional(0, 1, key1=1)
# d = {'key1': 1, 'key2': 2, 'arg1': 100, 'arg2': 200}
# func_kwargs_positional(**d)
print("-----------------------------------------------")
# def func_kwargs(**kwargs):
#     print('kwargs: ', kwargs)
#     print(kwargs['key3'])
#     print('type: ', type(kwargs))
# y=25
# func_kwargs(key1=1, key2=24, key3='y')