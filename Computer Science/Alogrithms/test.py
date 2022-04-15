from collections import deque

# 두 노드간 최단 경로를 찾아야 하므로 bfs를 이용한다.

n,m = map(int, input().split())

relation_map = [[] for _ in range(n)]

count_data = [[0 for _ in range(n)]for _ in range(n)]

def bfs(root):
    visited = [False for _ in range(n)]
    count = [0 for i in range(n)]
    visited[root] = True
    q = deque()
    q.appendleft(root)

    while len(q) != 0: 
        r = q.pop()
        raw = relation_map[r]

        for v in raw:
            if visited[v] == False:
                count[v] = count[r] + 1
                visited[v] = True
                q.append(v)
    
    return sum(count)

for i in range(m):
    a,b = map(int,input().split())
    relation_map[a-1].append(b-1)
    relation_map[b-1].append(a-1)

min_bacon = 0

result = 0

for i in range(n):
    count = bfs(i)
    if i == 0:
        min_bacon = count
        result = i+1
    elif min_bacon > count:
        min_bacon = count
        result = i+1

print(result)


# DFS & BFS 차이 : https://velog.io/@lucky-korma/DFS-BFS%EC%9D%98-%EC%84%A4%EB%AA%85-%EC%B0%A8%EC%9D%B4%EC%A0%90

# 추가 : https://gmlwjd9405.github.io/2018/08/15/algorithm-bfs.html