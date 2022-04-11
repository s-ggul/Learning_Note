#백준 1003 번
#dp문제

import sys
n = int(sys.stdin.readline().rstrip())
data = {i : 0 for i in range(41)}
# 숫자의 최대값이 40 

result = [[0, 0] for i in range(41)]

result[0][0] = 1
result[1][1] = 1  

def fibo(n):
    if n == 0:        
        return 0
    elif n == 1:
        return 1
    elif data[n] > 0:
        return data[n] 
    else:
        data[n] = fibo(n-1) + fibo(n-2)
        result[n][0], result[n][1] = result[n-1][0] + result[n-2][0], result[n-1][1] + result[n-2][1]
        return data[n]

for i in range(n):
    num = int(sys.stdin.readline().rstrip())

    fibo(num)
    
    sys.stdout.write(str(result[num][0]) +' '+ str(result[num][1]) +'\n')
