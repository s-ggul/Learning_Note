import sys
n, m, b = map(int,sys.stdin.readline().rstrip().split())

groundHeight = [list(map(int,sys.stdin.readline().rstrip().split())) for i in range(n)]

#numOfH ={i:0 for i in range(257)}
linearGround = []

minH = 256
maxH = 0

for raw in groundHeight :
    if min(raw) < minH:
        minH = min(raw)
    elif max(raw) > maxH:
        maxH = max(raw)     
    for h in raw:
        linearGround.append(h)

linearGround.sort(reverse=True)

result = (-1, -1)

while minH <= maxH :
    totalT = 0
    tempB = b
    flag = True
    for h in linearGround:
        if h > minH or tempB == 0:
            totalT += (h - minH) * 2
            tempB += (h - minH)
        elif h < minH and tempB >= (minH-h):
            totalT += (minH - h)
            tempB -= (minH - h)
        elif h == minH:
            continue
        else : 
            flag = False 
            break    

    if tempB >= 0 and flag:
        if result[0] == -1 :
            result = (totalT, minH)
        elif result[0] > totalT :
            result = (totalT, minH)
        elif result[0] == totalT and result[1] < minH:
            result = (totalT, minH)

    minH += 1

print(result[0], result[1])

[pypy vs python 참고](https://ralp0217.tistory.com/entry/Python3-%EC%99%80-PyPy3-%EC%B0%A8%EC%9D%B4)
