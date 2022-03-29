## Bubble Sort(버블 정렬)

-----

<br />

- `Bubble Sort(버블 정렬)`은 두 인접한 원소를 검사하여 정렬하는 알고리즘이다.
- 시간복잡도는 `O(n^2)` 으로 상당히 느리지만, 코드자체가 단순해서 자주 사용된다.
- 이때 같은 방식으로 양방향 정렬을 하게되면 `칵테일 정렬`이 된다.

<br />

#### 파이썬 예제 코드

```python
def bubbleSort(x):
    length = len(x)-1
    for i in range(length):
        for j in range(length-i):
            if x[j] > x[j+1]:
                x[j], x[j+1] = x[j+1], x[j]

return x
```



