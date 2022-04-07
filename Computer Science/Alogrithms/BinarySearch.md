## Binary Search (이진탐색)

---

<br />

- 정렬된 리스트의 범위를 반씩 나누어 탐색을 진행하는 방법
- 정렬된 리스트에서만 사용가능 
- 속도가 빠름 

<span align='center'>

|상황|속도|
|:---:|:---:|
|최적|O(1)|
|보통|O(logn)|
|최악|O(logn)|

</span>

### 동작 

1. 배열의 중간값 설정
2. 중간값과 검색값 비교
   1. 검색값과 같은 경우 - 탐색완료
   2. 검색값이 중간값보다 큰 경우 - low를 중간값+1 로 조정
   3. 검색값이 중간값보다 작은 경우 - high를 중간값-1 로 조정
3. low가 high보다 작거나 같은경우까지 반복(값을 찾은 경우가 아니라면) 

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
