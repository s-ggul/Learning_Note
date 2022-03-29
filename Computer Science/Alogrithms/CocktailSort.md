## Cocktail Sort(칵테일 정렬)

-----

<br />

- 양방향 거품정렬 (bidirectional bubble sort)라고도 불리며 버블정렬의 변형이다.
- 한번의 루틴마다 `방향을 바꿔` 정렬하는 알고리즘이다.
- 버블정렬과 크게 다르지는 않지만 버블 정렬보다 빠르다.

<br />

#### 파이썬 예제 코드
```python
def cocktail(arr, a, b):
    swapped = True

    while swapped == True:
        swapped = False
        for i in range(a, b):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]

        if swapped == False:
            break
        
        swapped = False

        b = b - 1

        for i in range(b-1, a-1, -1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swapped = True
        
        a = a + 1
```