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

- 그리디하게 문제 접근
1. 우선 `count` 딕셔너리와 `reportCount` 딕셔너리를 선언
2. 같은 신고 내용(= 신고자도 같고 신고당하는 사람도 같은)은 여러번 나와도 1번으로만 취급 => 인자로 들어온 `report`에서 중복을 제거하기 위해 `set` (집합형태 => 중복이 없다)으로 변환 후 다시 `list`로 변환
3. for문을 이용해 dictionary를 초기화 
   - 자신이 신고당한 횟수 = `count` 딕셔너리에 저장
   - 대상 제재 대상이 자신에게 몇 개가 올지 = `reportCount` 딕셔너리에 저장
4. report에 저장된 각각의 문자열을 파싱한 뒤 신고 횟수 누적
5. 누군가의 신고 횟수가 임계값 `k`를 넘으면 `reportCount` 딕셔너리에 누적
6. 결과 출력

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

1. 초기 `words` 딕셔너리에 숫자의 영문표기를 키로하고 숫자(문자열)를 값으로 가지는 딕셔너리로 초기화
2. `temp` 문자열과 `answer` 문자열 선언 및 각각 빈 문자열로 초기화
3. 매개변수로 들어온 `s` (문자열) 내부에 `c` (한글자)를 가져와 `words.values()` 에 있는 숫자형태의 문자들과 비교해 있는지 체크
4. 만일 있다면 바로 `answer` 문자열에 추가하고 없다면 `temp` 문자열에 추가  
5. 이후 `words.keys()`를 통해 `key`들을 가져와 해당 `key`들 중 `temp`에 누적된 문자가 있는지 비교
6. 만일 `temp`에 누적된 문자와 동일한 문자가 있다면 `answer`에 `words[temp]`로 값을 문자열에 추가해주고, 없다면 반복문을 계속 진행 
7. 누적된 `answer`문자열을 `int` 형으로 형변환 후 최종 결과 반환