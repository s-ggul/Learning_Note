## 신고결과 받기

---

<br />

```python
def solution(id_list, report, k):
    count = dict()
    reportCount = dict()

    report = list(set(report)) # 동일 신고에 대한 중복값 처리를 위해 set 변환 후 list 변환

    for id in id_list: # 딕셔너리 초기화
        count[id] = 0    
        reportCount[id] = 0

    for str in report : # report에 저장된 각각의 문자열 파싱해 신고 횟수 누적
        src, trg = str.split(' ')
        count[trg] += 1

    for str in report : # 
        src, trg = str.split(' ')
        if count[trg] >= k :
            reportCount[src] += 1

    return list(reportCount.values())

```
<br />

## 숫자 문자열과 영단어

---


```python
def solution(s):
    words = {'zero': '0', 'one':'1', 'two':'2', 'three':'3','four':'4', 'five':'5', 'six':'6', 'seven':'7','eight':'8','nine':'9'}

    temp = ''
    answer = ''
    for c in s:
        if c in words.values() :
            answer += c 
        else:
            temp += c
   
        if temp in words.keys() :
            answer += words[temp]
            temp = ''
            
    return int(answer)
```