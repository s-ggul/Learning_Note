from pydoc import visiblename


n,m = map(int, input().split())

relation_map = [[0 for _ in range(n)]for _ in range(n)]

for i in range(m):
    a,b = map(int,input().split())
    relation_map[a][b] = 1
    relation_map[b][a] = 1

visited = [[0 for _ in range(n)]for _ in range(n)]
