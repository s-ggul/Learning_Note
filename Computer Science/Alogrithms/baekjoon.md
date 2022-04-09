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
        # 이진탐색 조건을 잘 생각해보자. 그리고 가능한 low <= high 으로 사용해보자
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

2805 나무자르기

```python
n, m = map(int,input().split())

treeHeight = list(map(int, input().split()))

# 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 출력한다.
treeHeight.sort()
resultList=list()

def binarySearch(data, m2):
    low = 1 
    # m은 1<= m <= 2,000,000,000
    high = data[len(data)-1]
    # n도 1이상이기에 입력된 데이터중 가장 큰값의 경우 그 값보다 1 더 작은값부터 그 밑의 값까지 탐색하면 되므로 가장 큰값을 끝값으로 지정해주면 된다.
    result = 0

    while low <= high:       
        mid = (low + high) // 2
        # 여기서의 mid 값이 절단기에 설정할 높이 H 
        totalM = 0
        for tree in data:
            if tree > mid:
                totalM += (tree - mid)
            # tree길이가 mid 보다 클때만 빼주도록 조건문 설정 => totalM에 음수값을 더하지 않도록

        if totalM >= m2:
            # mid(H) 값을 높여서 탐색해야함
            if result < mid :
                result = mid
            low = mid + 1
        else:
            high = mid - 1
    return result

#print(max(resultList))
#이렇게 max () 를 사용했을때 콜스택 초과가 나는 경우가 있을 수도 있음 따라서 값을 계속 변경해줄것.
# mix 나 max의 인자에 제한이 없는것 같지만 실제 인자가 무수히 많아지게 된다면 콜스택 초과 에러가 발생할 수 있다.

print(binarySearch(treeHeight, m))
```

15829 Hashing
```python
n = int(input())
word = input()

result = 0

alpha = {
    'a':1,
    'b':2,
    'c':3,
    'd':4,    
    'e':5,
    'f':6,
    'g':7,
    'h':8,
    'i':9,
    'j':10,
    'k':11,
    'l':12,
    'm':13,
    'n':14,
    'o':15,
    'p':16,
    'q':17,
    'r':18,
    's':19,
    't':20,
    'u':21,
    'v':22,
    'w':23,
    'x':24,
    'y':25,
    'z':26,
    }

for i in range(len(word)):
    result += alpha[word[i]] * (31**i)

print(result % 1234567891)
```

18111 마인크래프트
```python

```