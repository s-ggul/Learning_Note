#1074번 Z
from collections import deque

from typing import Deque


N, r, c = map(int, input().split())

l = 2 ** N

q = deque()

def recursiveZ (x, y, l, count):
    global answer
    if l == 2:
        if (x,y) == (r,c):
            answer = count
        elif (x,y+1) == (r,c): 
            answer = count + 1
        elif (x+1,y) == (r,c): 
            answer = count + 2
        elif (x+1,y+1) == (r,c): 
            answer = count + 3 

    elif l > 2 :
        dividedL = l//2
        if r < dividedL and c < dividedL:
            recursiveZ(x ,y, dividedL, count)
        elif r < dividedL and c >= dividedL:
            recursiveZ(x ,y+dividedL,dividedL, count+(dividedL**2))
        elif r >= dividedL and c < dividedL:
            recursiveZ(x+dividedL, y,dividedL, count + (dividedL**2) * 2)
        elif r >= dividedL and c >= dividedL:
            recursiveZ(x+dividedL, y+dividedL,dividedL, count+ (dividedL**2) * 3)
answer = 0

recursiveZ(0,0,l,0)

print(answer)
