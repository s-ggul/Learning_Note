## GCD & LCM(최대공약수 & 최소공배수)

---

<br />

### 최대공약수
```python
def GCD(num1, num2) :
    if num2 == 0:
        return num1
    else : 
        return GCD(num2, num1 % num2)

```

<br />

### 최소 공배수(LCM)

- LCM = (a * b) / GCD(a, b)

<br />

### 최대공약수 최소공배수 구하기 예제

```python
a, b = map(int, input().split())

def GCD(num1, num2) :
    if num2 == 0:
        return num1
    else : 
        return GCD(num2, num1 % num2)

print(GCD(a, b))
print((a * b) // GCD(a,b))
```