>>> print('the {}{}{}'.format('fox','brown','quick'))
the foxbrownquick
>>> print('the {}  {} {}'.format('fox','brown','quick'))
the fox  brown quick
>>> print('the {2}  {1} {0}'.format('fox','brown','quick'))
the quick  brown fox
>>> print('the {2}  {1} {0}'.format('fox','brown','quick'))
the quick  brown fox
>>> print('the {2} {1} {0}'.format('fox','brown','quick'))
the quick brown fox
>>> print('the {q} {b} {f}'.format(f='fox',b='brown',q='quick'))
the quick brown fox
>>> 
