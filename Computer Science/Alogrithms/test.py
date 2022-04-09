'''
n, m, b = map(int,input().split())

groundHeight = [list(map(int,input().split())) for i in range(n)]

maxH = 0

for raw in groundHeight:
    temp = max(raw)
    if temp > maxH:
        maxH = temp

area = n * m

result = dict()

def search(data,b, area):
    low = 0
    high = b // (area) + maxH
    # 블록을 전체 넓이로 한층씩 쌓았을때 닿을수있는 최대 높이
    tempB = b
    while low < high :
        tempB = b
        time = 0
        for raw in groundHeight:
            for h in raw:
                temp = low - h
                if temp < 0 :
                    time += (-1)*temp * 2
                    tempB += 1
                elif temp > 0 : 
                    time += temp
                    tempB -= 1
         
        if tempB >= 0:
            if low == 0 :
                minItem = (time, low)        
            else :
                if minItem[0] > time:
                    minItem = (time, low)
                elif minItem[0] == time :
                    minItem = (time, low) if low > minItem[1] else minItem
            
        low += 1

    return minItem


print(search(groundHeight, b, area))
'''

'''하...ㅠㅠ'''