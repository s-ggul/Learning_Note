## Baekjoon

---

10816 숫자카드 2

```python
n = int(input())
cards = list(map(int, input().split()))
m = int(input())
cardType = list(map(int, input().split()))

cards.sort()
cardDic = {key : 0 for key in cards}

for t in cards:
    cardDic[t] += 1

keyList = sorted(list(cardDic.keys()) )

def binarySearch (data, num):
    low = 0
    high = len(data) - 1

    while low <= high:
        mid = (low + high) // 2
        if data[mid] == num :
            return True

        elif num > data[mid] :
            low = mid + 1

        elif num < data[mid] : 
            high = mid - 1
    return False

for t in cardType:
    if binarySearch(keyList, t) == True:
        print(cardDic[t],end=' ')
    else: 
        print(0, end=' ')
```

10845 큐 
```python
import sys

n = int(sys.stdin.readline().rstrip())

q = list()

while n > 0:
    cmd = sys.stdin.readline().rstrip()
    ## .rstrip() 를 안붙여 주면 입력값이 예를들어 "push 1" 인경우 cmd에는 "push 1\n" 으로 개행 문자열까지 포함된다. 따라서 .rstrip()를 붙여 올바른 입력을 받도록한다.

    val = ''

    if ' ' in cmd:
        cmd, val = cmd.split()
        val = int(val)
        
    if cmd == 'push':
        q.append(val)
    elif cmd == 'pop':
        if len(q) == 0:
            sys.stdout.write(str(-1)+'\n')
            ## write함수는 스트링 값만 출력 할 수 있다. print() 처럼 ..write(1) 이 불가능하다.
        else:    
            sys.stdout.write(str(q[0])+'\n')
            del q[0]
    elif cmd == 'size':
         sys.stdout.write(str(len(q))+'\n')
    elif cmd == 'empty':
        if len(q) == 0:
             sys.stdout.write(str(1)+'\n')
        else:
             sys.stdout.write(str(0)+'\n')
    elif cmd == 'front':
        if len(q) == 0:
             sys.stdout.write(str(-1)+'\n')
        else:
             sys.stdout.write(str(q[0])+'\n')
    elif cmd == 'back':
        if len(q) == 0:
             sys.stdout.write(str(-1)+'\n')
        else:
             sys.stdout.write(str(q[len(q)-1])+'\n')

    n -= 1
```

1654 랜선 자르기
```python
k, n = map(int,input().split())

kLength = list()
result = list()

for i in range(k):
    kLength.append(int(input()))

kLength.sort()


def binarySearch(data, n2):
    low=1
    # 랜선의 길이는 자연수라고 명시되어있다..
    # 조심하자..
    # low를 0으로 해놓고 헛짓거리함.. 
    high = data[len(data)-1] + 1
    '''
     4 4
     100
     100
     100
     100
     과 같은 입력이 들어왔을때 high값도 탐색 범위에 포함시키기 위해 1더해주기. 
    '''

    while (low <= high): 
        # while 조건을 단순히 low 가 작은 경우로만 해주면 high와 low가 같은 경우의 값은 비교를 진행하지 않음
        # 이진탐색 조건을 잘 생각해보자 될 수 있으면 low <= high 으로 사용하자
        mid = (low + high) // 2
        total = 0
        for kl in data:
            total += kl // mid
        
        if total >= n2 : 
            result.append(mid)
            low = mid + 1
        else:
            high = mid - 1 

# mid 가 0인경우 생각해보기
binarySearch(kLength, n)

print(max(result))
```
