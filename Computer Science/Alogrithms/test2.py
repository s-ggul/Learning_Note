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
print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))