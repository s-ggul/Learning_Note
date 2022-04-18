'''
2018 카카오 blind recruitment

def solution(s):
    result = s
    for i in range(1,len(s)+1):
        current = i
        index = 0
        base = s[index:index + current]
        
        temp = ''
        count = 1

        while index < len(s):
            index+= current
            if index+current >= len(s):
                word = s[index:]
            else:
                word = s[index:index+current]
            
            if base == word:
                count += 1
            else:
                if count == 1:
                    temp += base
                else: 
                    temp += str(count) + base
                count = 1
                base = word
        # 마지막에 1을 replace해주는 방식으로 작성했었는데 갯수가 10 ~ 19 인 경우에도 1을 없애서 에러가 나왔다. 조심하자
        if len(result) > len(temp):
            result = temp

    return len(result)
'''
'''
2019 KAKAO BLIND RECRUITMENT - 오픈채팅방

def solution(record):
    opr =[]
    uidName = {}
    answer = []
    
    for data in record:
        words = list(data.split())
        if words[0] == 'Enter': 
            opr.append((words[0], words[1]))
            uidName[words[1]] = words[2]
        elif words[0] == 'Change':
            uidName[words[1]] = words[2]
        else:
            opr.append((words[0], words[1]))

    for k,v in opr:
        if k =='Enter':
            answer.append(uidName[v]+'님이 들어왔습니다.')
        elif k == 'Leave':
            answer.append(uidName[v]+'님이 나갔습니다.')

    return answer

'''
'''
2021 KAKAO BLIND RECRUITMENT - 메뉴 리뉴얼

import itertools

def solution(orders, course):
    answer = []
    count = {}
    result = []

    for num in course:
        for order in orders:
            if len(order) >= num:
                nCr = list(itertools.combinations(order,num))
                for data in nCr:
                    temp = ''
                    for c in data:
                        temp += c
                    temp = ''.join(sorted(temp))    
                    count[temp] = 0                    
    # 해시 테이블 값 0으로 초기화 => 같은 문자열 조합은 같은 키이기 때문에 join함수 이용해서 문자열을 정렬해서 키로 사용

    for num in course:
        for order in orders:
            if len(order) >= num:
                nCr = list(itertools.combinations(order,num))
                for data in nCr:
                    temp = ''
                    for c in data:
                        temp += c
                    temp = ''.join(sorted(temp))    
                    count[temp] += 1                
    
    # 각각 문자열들에 대해 counting => 여기서도 같은 문자열 조합은 같은 키이기 때문에 join함수 이용해서 문자열을 정렬해서 키로 사용

    count = sorted(count.items(), key = lambda item : item[1], reverse=True)    
    print(count)
    result = []
    # count 해시테이블 내림차순으로 정렬 한번 해줌
    score = {}
    for num in course:
        score[num] = 0

    for num in course:
        for k,v in count:
            if len(k) == num and v > 1:
                if score[num] <= v :
                    score[num] = v
                    result.append(k)
    
    # score에 저장된 값보다 나타나는 값이 큰 경우 해당 키값을 result에 append
    # 그리고 score[num]을 업데이트

    result.sort()            
    # 마지막으로 
    return result

print(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))
'''
'''
2018 KAKAO BLIND RECRUITMENT - [1차] 뉴스 클러스터링


def solution(str1, str2):
    alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    data1 = []
    data2 = []

    for i in range(len(str1) - 1):
        flag = True
        for c in str1[i:i+2]:
            if c.lower() not in alpha:
                flag = False
        if flag:
            data1.append(str1[i:i+2].lower())    

    for i in range(len(str2) - 1):
        flag = True
        for c in str2[i:i+2]:
            if c.lower() not in alpha:
                flag = False
        if flag:
            data2.append(str2[i:i+2].lower())  

    intersection = []

    for src in data1:
        for trg in data2:
            if src == trg: 
                data2.remove(trg)
                intersection.append(src)
                break

    total = len(data1) + len(data2)

    if total == 0:
        return 65536
        
    return int((len(intersection)/total) *  65536)
    알파벳문자열인지 확인할때 string.isalpha() 사용할 수 있음!!! 참고할것.
'''
'''
def solution(places):
    answer = []
    
    각 P에서부터 bfs를 돌아 그때 맨해튼 거리를 체크
    
    return answer

# https://www.youtube.com/watch?v=hCVgKE6qwFs 참고하기
'''
'''
2020 카카오 인턴십 - 수식 최대화

'''
import itertools 

def solution(expression):
    
    return answer

print(solution("100-200*300-500+20"))