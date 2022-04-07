n = int(input())

q = list()

while n > 0:
    cmd = input()
    val = ''
    
    if ' ' in cmd:
        cmd, val = cmd.split()
        val = int(val)
    
    if cmd == 'push':
        q.append(val)
    elif cmd == 'pop':
        if len(q) == 0:
            print(-1)
        else:    
            print(q[0])
            del q[0]
    elif cmd == 'size':
        print(len(q))
    elif cmd == 'empty':
        if len(q) == 0:
            print(1)
        else:
            print(0)
    elif cmd == 'front':
        if len(q) == 0:
            print(-1)
        else:
            print(q[0])
    elif cmd == 'back':
        if len(q) == 0:
            print(-1)
        else:
            print(q[len(q)-1])

    n -= 1