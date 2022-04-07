## Binary Search (이진탐색)

---

<br />



<br />

### 이진탐색 구현
```python
def binarySearch(data, num):
    low = 0
    high = len(data) - 1

    while(low <= high):
        mid = (low + high) // 2
        
        if num == data[mid]:
            return True
        elif num > data[mid]:
            low = mid + 1 
        else :
            high = mid - 1

    return False
```

<br />

### 이진탐색 사용 예시 코드

```python
n = int(input())
data1 = list(map(int,input().split()))
m = int(input())
data2 = list(map(int,input().split()))

data1.sort()

def binarySearch(data, num):
    low = 0
    high = len(data) - 1

    while(low <= high):
        mid = (low + high) // 2
        
        if num == data[mid]:
            return True
        elif num > data[mid]:
            low = mid + 1 
        else :
            high = mid - 1

    return False

for num in data2:
    if binarySearch(data1, num) :
        print(1)
    else:
        print(0)
        
```
