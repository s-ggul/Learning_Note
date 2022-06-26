import sys 

n = int(sys.stdin.readline())
s = set()

for i in range(n) : 
    str = sys.stdin.readline().rstrip()
    cmd = ''
    num = 0

    if str.find(' ') != -1 :
        cmd, num = str.split(' ');
        num = int(num)
    else:
        cmd = str
    
    if cmd == 'add':
        s.add(num)
    elif cmd == 'remove':
        if num in s:
            s.remove(num)
    elif cmd == 'check':
        if num in s:
            sys.stdout.write('1\n')
        else:
            sys.stdout.write('0\n')
    elif cmd == 'toggle' : 
        if num in s:
            s.remove(num)
        else:
            s.add(num)
    elif cmd == 'all' :
        s = set([i for i in range(1,21)])
    elif cmd == 'empty' :
        s = set()

    