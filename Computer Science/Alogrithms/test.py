#1074번 Z
from collections import deque

from typing import Deque


N, r, c = map(int, input().split())

l = 2 ** N

q = deque()

def recursiveZ (x, y, l, startIndex):
    global answer, r, c
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
        dividedL = l // 2        
        if r < dividedL and c < dividedL:
            recursiveZ(x ,y, dividedL, startIndex)
        elif r < dividedL and c >= dividedL:
            c -= dividedL
            recursiveZ(x ,y,dividedL, startIndex+(dividedL**2))
        elif r >= dividedL and c < dividedL:
            r -= dividedL
            recursiveZ(x, y,dividedL, startIndex + (dividedL**2) * 2)
        elif r >= dividedL and c >= dividedL:
            r -= dividedL
            c -= dividedL
            recursiveZ(x, y,dividedL, startIndex+ (dividedL**2) * 3)

answer = 0

recursiveZ(0,0,l,0)

print(answer)

# 모든 좌표를 0으로 조정해서 해결
!!