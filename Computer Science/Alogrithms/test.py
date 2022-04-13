#1074번 Z
from collections import deque

from typing import Deque


N, r, c = map(int, input().split())

l = 2 ** N

q = deque()

def recursiveZ (x, y, l, startIndex):
    global answer
    if l == 2:
        if (x,y) == (r,c):
            answer = startIndex
        elif (x,y+1) == (r,c): 
            answer = startIndex + 1
        elif (x+1,y) == (r,c): 
            answer = startIndex + 2
        elif (x+1,y+1) == (r,c): 
            answer = startIndex + 3 

    elif l > 2 :
        dividedL = l//2
        if r < dividedL and c < dividedL:
            recursiveZ(x ,y, dividedL, startIndex)
        elif r < dividedL and c >= dividedL:
            recursiveZ(x ,y+dividedL,dividedL, startIndex+(dividedL**2))
        elif r >= dividedL and c < dividedL:
            recursiveZ(x+dividedL, y,dividedL, startIndex + (dividedL**2) * 2)
        elif r >= dividedL and c >= dividedL:
            recursiveZ(x+dividedL, y+dividedL,dividedL, startIndex+ (dividedL**2) * 3)
answer = 0

recursiveZ(0,0,l,0)

print(answer)

# 분할정복 & 재귀 https://ggasoon2.tistory.com/11