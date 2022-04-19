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
2021 카카오 채용연계형 인턴십 - 거리두기 확인하기

from collections import deque 

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(graph, x, y):
    visited = [[False for _ in range(5)] for _ in range(5)]
    q = deque()
    q.append((x,y,0))
    visited[x][y] = True

    while len(q) != 0:
        x, y, d = q.popleft()
        if d == 2:
            continue

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < 5 and 0 <= ny < 5 :
                if visited[nx][ny] == True:
                    continue
                
                visited[nx][ny] = True
                
                if graph[nx][ny] == 'X':
                    continue
                elif graph[nx][ny] == 'P':
                    return False
                elif graph[nx][ny] == 'O':
                    q.append((nx,ny,d+1))
    return True

def solution(places):
    
    answer = []
    for place in places:
        result= []
        for i in range(len(place)):
            for j in range(len(place[i])):
                if place[i][j] == 'P':
                    result.append(bfs(place,i,j))
        if False in result:
            answer.append(0)
        else:
            answer.append(1)
    return answer
'''
'''
2020 카카오 인턴십 - 수식 최대화

import itertools 

def solution(expression):
    answer = 0
    opr = set()
    expr = []
    tempNum = ''
    
    for c in expression:
        if c.isdecimal() == False:    
            opr.add(c)
        
            
    opr = list(itertools.permutations(opr))
    # 우선순위 모든 순열 고려

    result = []
    if len(opr) > 1: 
        for order in opr:
            result.append(abs(int(calExpr(order, 0, expression))))
    else: 
        result.append(abs(int(eval(expression))))
        # 연산자가 한개인 경우
    answer = max(result)

    return answer

#print(solution("100-200*300-500+20"))
#이거 식 쪼개는 방식 무조건 공부하기
#정말 유용하게 쓰일듯한 코드

def calExpr(op, n, expression): 
    if n == 2: 
        # 즉 우선순위가 제일 높은게 op 의 원소 중 가장마지막에 있음
        return str(eval(expression))
    
    if op[n] == '+':
        temp = str(eval('+'.join([calExpr(op, n+1, e) for e in expression.split('+')])))
    
    elif op[n] == '-':
        temp = str(eval('-'.join([calExpr(op, n+1, e) for e in expression.split('-')])))
    
    elif op[n] == '*':
        temp = str(eval('*'.join([calExpr(op, n+1, e) for e in expression.split('*')])))

    return temp
    # 이부분은 코드를 참고함
    # [참고] : https://soniacomp.medium.com/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%88%98%EC%8B%9D%EC%B5%9C%EB%8C%80%ED%99%94-%ED%8C%8C%EC%9D%B4%EC%8D%AC-2020-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%9D%B8%ED%84%B4%EC%8B%AD-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-e43e53ae19b6

'''

'''
2020 KAKAO BLIND RECRUITMENT - 괄호 변환

def check(p):
    count = 0
    for c in p:
        if c == '(':
            count += 1
        else:
            count-=1
            if count < 0:
                return False
    return True

def recursive(p):
    countL = 0
    countR = 0
    if p == '':
        return ''

    for i in range(len(p)):
        if p[i] == '(':
            countL += 1
        elif p[i] == ')':
            countR += 1

        if countL >0 and countR> 0 and countL == countR:
            u = p[:i+1]
            break

    if check(u):
        return u + recursive(p[i+1:])
    else:
        temp = ''
        u = u[1:len(u)-1]
        for c in u:
            if c == '(':
                temp+= ')'
            else: 
                temp+= '('

        return '(' + recursive(p[i+1:]) + ')' + temp
    

def solution(p):
    answer = recursive(p)
    return answer
'''
