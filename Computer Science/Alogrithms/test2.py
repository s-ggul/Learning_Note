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