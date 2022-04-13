N = int(input())
M = int(input())
errorBtn = list(map(int, input().split()))

btn = [i for i in range(10) if i not in errorBtn]

print(btn)

current = 100

count = 0
nearestbtn = -1 

nearestNum =''

for c in str(N):
    if c in btn:
        count+=1
    else : 
        for b in btn :
            if abs(int(c) - nearestbtn) > abs(int(c) - btn):
                nearestbtn = int(c)
                nearestNum += c
            