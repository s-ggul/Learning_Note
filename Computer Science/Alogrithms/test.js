/*
2021 카카오 채용연계형 인턴십 - 거리두기 확인하기
*/

function solution(places) {
    var answer = [];

    for(const place of places)
    {
        for (var i = 0; i <place.length; i++)
        {
            for(var j = 0; j < place[i].length; j++)
            {
                if (place[i][j] == 'P')
                {
                    var check = bfs(place,i,j)
                }
            }
        }
    }

    return answer;
}

function bfs(graph, x, y)
{
    var visited = Array.from(Array(5), () => Array(5).fill(false));
    var q = [];
    q.push([x, y, 0])
    visited[x][y] = true;

    while (q.length !== 0)
    {
        var data = q.shift();
        var x = data[0];
        var y = data[1];
        var d = data[2];

        
    }
}
console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));