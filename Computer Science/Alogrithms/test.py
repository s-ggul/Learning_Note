T = int(input())
testCase = []

for t in range(T):
    testCase.append(int(input()))

maxNum = max(testCase)
dp = [0 for _ in range(maxNum+1)]

for i in range(1, maxNum+1):
    # 여기서부터 DP 로직 작성하기