n = int(input())
cards = list(map(int, input().split()))
m = int(input())
cardType = list(map(int, input().split()))

cards.sort()
searchResult = dict()

for t in cardType:
    searchResult[str(t)] = 0

def binarySearch (data, num):
    low = 0
    high = len(data) - 1

    while low <= high:
        mid = (low + high) // 2

        if data[mid] == num :
            searchResult[str(num)] += 1
            del data[mid]
            data.append(10000001)
            break
        
        elif num > data[mid] :
            low = mid + 1

        elif num < data[mid] : 
            high = mid - 1
 
for target in cardType:
    binarySearch(cards, target)

for t in cardType:
    print(searchResult[str(t)], end=' ')
    