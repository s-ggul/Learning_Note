'''
expr = input()

tempExpr = ''
tempNum = ''

# + 기호를 포함하면 덧셈을 해주는 함수
def exprSum(strData):
    if '+' in strData:
            for i in range(len(strData)):
                if strData[i] == '+':
                    return str(int(strData[:i]) + int(strData[i+1:]))
    return strData

# 우선적으로 식에 포함된 + 기호를 이용한 덧셈을 진행 식에서 + 기호가 있는 부분은 모두 더해줌
for i in range(len(expr)):
    if i == len(expr) - 1:
        tempNum += expr[i]
        tempNum = exprSum(tempNum)
        tempExpr += tempNum
    elif expr[i] == '-' or expr[i] == '+':
        tempNum = exprSum(tempNum)
        if expr[i] == '-':
            tempExpr += tempNum + '-'
            tempNum=''
        elif expr[i]== '+':
            tempNum += '+'
    else:
        tempNum += expr[i]

result = 0
tempNum = ''
count = 0

# 괄호를 이용해 덧셈을 진행한 식에 대하여 나머지 식을 계산(뺄셈만 있음)
if '-' in tempExpr:
    for i in range(len(tempExpr)):
        if tempExpr[i] == '-':
            count += 1
            if count == 1:
                result = int(tempNum)
                tempNum=''
            else: 
                result -= int(tempNum)
                tempNum=''
        elif i == len(tempExpr)-1:
            tempNum += tempExpr[i]    
            result -= int(tempNum)
            tempNum=''
        else:
            tempNum += tempExpr[i]    
else:
    result = int(tempExpr)

print(result)
'''
'''
n, m = map(int, input().split())

numToName = {}
nameToNum = {}
question = []

nums = ['0','1','2','3','4','5','6','7','8','9']

for i in range(1,n+1):
    data = input()
    numToName[i] = data
    nameToNum[data.lower()] = i

for i in range(m):
    question.append(input().lower())

for q in question:
    if q[0] in nums:
        print(numToName[int(q)])
    else:
        print(nameToNum[q.lower()])
'''