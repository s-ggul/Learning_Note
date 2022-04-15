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
