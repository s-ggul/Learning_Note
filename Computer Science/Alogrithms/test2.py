from collections import deque

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
                temp += str(count) + base
                count = 1
                base = word

        temp = temp.replace('1', '')
        print(temp)
        if len(result) > len(temp):
            result = temp

    return len(result)

print(solution(''))