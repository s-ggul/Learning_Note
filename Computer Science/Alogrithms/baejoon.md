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