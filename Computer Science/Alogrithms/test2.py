'''
프로그래머스 2020 카카오인턴십
keyPad = {
    '1' : (0,0), 
    '2' : (0,1), 
    '3' : (0,2), 
    '4' : (1,0), 
    '5' : (1,1), 
    '6' : (1,2), 
    '7' : (2,0), 
    '8' : (2,1), 
    '9' : (2,2),
    '*' : (3,0), 
    '0' : (3,1),
    '#' : (3,2) 
    }


def solution(numbers, hand):
    answer=''
    left = '*'
    right = '#'
    
    for num in numbers:
        if num in [1, 4, 7] :
            answer += 'L'
            left = str(num)
        elif num in [3, 6, 9] :
            answer += 'R'
            right= str(num)
        else:
            leftLength = abs(keyPad[left][0] - keyPad[str(num)][0]) + abs(keyPad[left][1] - keyPad[str(num)][1])
            # 현재 왼손위치에서 목표까지 거리
            rightLength = abs(keyPad[right][0] - keyPad[str(num)][0]) + abs(keyPad[right][1] - keyPad[str(num)][1])
            # 현재 오른손위치에서 목표까지 거리
            if leftLength < rightLength:
                answer += 'L'
                left = str(num)
            elif leftLength > rightLength:
                answer+='R'
                right = str(num)
            else:
                if hand == 'left':
                    answer+='L'
                    left = str(num)
                else:
                    answer+='R'
                    right = str(num)
    return answer
'''
'''
2019 카카오 겨울 인턴십 - 크레인 인형뽑기 게임

from collections import deque

def solution(board, moves):
    count = 0
    st = deque()
    
    for num in moves:
        for i in range(len(board)):
            item = board[i][num-1]
            if item == 0:
                continue
            else:
                if len(st) != 0:
                    recent_item = st.popleft()
                    if recent_item == item:
                        count += 2
                    else:
                        st.appendleft(recent_item)
                        st.appendleft(item)
                else:
                    st.appendleft(item)
                board[i][num-1] = 0
                break
                
    return count
'''
'''
2019 KAKAO BlIND RECRUITMENT - 실패율
def solution(N, stages):
    answer= []
    totalUser=len(stages)
    count = {}
    for i in range(N):
        count[i+1] = 0
        
    stages.sort()
    
    for stage in stages:
        if stage == N+1:
            continue
        else:
            count[stage] += 1
    
    failure = {}
    
    for i in range(1,N+1):
        if totalUser == 0:
            failure[i] = 0
        else:    
            failure[i] = count[i]/totalUser     
        totalUser -= count[i]
    
    answerHash = sorted(failure.items(), key = lambda item : item[1],reverse=True)
    #Value를 기준으로 내림차순 정렬
    
    for i in range(len(answerHash)):
        answer.append(answerHash[i][0])
        
    return answer

=> 다른 사람들의 풀이중 기가맥힌것

def solution(N, stages):
    result = {}
    denominator = len(stages)
    for stage in range(1, N+1):
        if denominator != 0:
            count = stages.count(stage)
            result[stage] = count / denominator
            denominator -= count
        else:
            result[stage] = 0
    return sorted(result, key=lambda x : result[x], reverse=True)


'''
'''
2018 카카오 Blind Recruitment 1차 비밀지도
def solution(n, arr1, arr2):
    answer = []

    for i in range(n):
        bitStr = bin(arr1[i] | arr2[i])      
        temp = ''
        bitStr = bitStr[2:]
        bitStr = bitStr.rjust(n,'0') 
        #bin() 을 이용하면 맨앞에 0인 부분을 없애버리기에 길이를 맞춰줘야함 => 주의
        
        #bitStr에는 '0b' 가 앞에 포함되어있음
        
        for c in bitStr:
            if c == '1':
                temp += '#'
            elif c == '0':
                temp += ' '
        answer.append(temp)
        
    return answer
'''

def solution(dartResult):
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    divided = []
    answer = []
    temp = ''
    
    for i in range(len(dartResult)):
        if dartResult[i] in numbers and i == 0:
            temp += dartResult[i]
        elif dartResult[i] in numbers and dartResult[i-1] not in numbers:
            divided.append(temp)
            temp = dartResult[i]
        elif i == len(dartResult) -1 :
            temp += dartResult[i]
            divided.append(temp)
        else:
            temp += dartResult[i]
    index = 0
    score = {i:0 for i in range(3)}

    for expr in divided:
        tempNum = ''
        for c in expr :
            if c in numbers: 
                tempNum += c
            else:
                if score[index] == 0:
                    score[index] = int(tempNum)
    
                if c == 'S':
                    continue
                elif c =='D':
                    score[index] **= 2
                elif c =='T':
                    score[index] **= 3
                elif c == '*':
                    score[index] *= 2
                    if index > 0:
                        score[index-1] *= 2                        
                elif c == '#':
                    score[index] *= -1
        index += 1

    answer = sum(list(score.values()))
    return answer

print(solution('10D4S10D'))