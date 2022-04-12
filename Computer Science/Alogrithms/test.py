from collections import deque

from typing import Deque


N, r, c = map(int, input().split())

l = 2 ** N

q = deque()

def recursiveZ (x, y, l):
    if l == 2:
        q.append((x,y))
        q.append((x,y+1))
        q.append((x+1,y))
        q.append((x+1,y+1))
    
    elif l > 2 :
        dividedL = l//2
        if r < dividedL and c < dividedL:
            recursiveZ(x ,y, l//2)
        elif r < dividedL and c >= dividedL:
            recursiveZ(x ,y+dividedL,l//2)
        elif r >= dividedL and c < dividedL:
            recursiveZ(x+dividedL, y,l//2)
        elif r >= dividedL and c >= dividedL:
            recursiveZ(x+dividedL, y+dividedL,l//2)
                
count = 0

recursiveZ(0,0,l)

for data in q :
    count+=1
    if data[0] == r and data[1] == c:
        print(count-1) 
        # 0번째부터 시작하므로 마지막에 1을 빼준다.