/*
코딩테스트 연습
2022 KAKAO BLIND RECRUITMENT
신고 결과 받기

function solution(id_list, report, k) {
    
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    // Set으로 변환한뒤 해당 원소들을 다시 배열로 가져옴 이때 각 원소에 대해 split을 진행

    let count = new Map();
    
    for(const e of reports)
    {
        count.set(e[1], count.get(e[1]) + 1 || 1)
    }

    let note = new Map();

    for (const report of reports)
    {
        if (count.get(report[1]) >= k)
        {
            note.set(report[0], note.get(report[0])+1 || 1)
        }
    }

    let answer = id_list.map(a =>{ 
            let data = note.get(a)
            if (data === undefined)
            {
                return 0
            }
            else{
                return data

            }
        });

    return answer;
}
*/

/*
코딩테스트 연습
2021 Dev-Matching: 웹 백엔드 개발자(상반기)
로또의 최고 순위와 최저 순위

function solution(lottos, win_nums)
{
    let answer = []
    let zeroCount = 0
    let base = 0

    for(num of lottos)
    {   
        let check = false
        if (num === 0)
        {
            zeroCount += 1 
        }
        else
        {
            for (let i =0; i < win_nums.length; i++)
            {
                if (num === win_nums[i])
                {
                    base += 1
                    break;
                }
            }
        }
    }
    
    max_score = zeroCount + base;
    min_score = base;

    answer = [max_score, min_score].map(score=>{
        if (score === 6)
        {
            return 1;
        }
        else if (score === 5)
        {
            return 2;
        }
        else if (score === 4)
        {
            return 3;
        }
        else if (score === 3)
        {
            return 4;
        }
        else if (score === 2)
        {
            return 5;
        }
        else
        {
            return 6;
        }
    })

    return answer;
}

// 다른 사람의 풀이 중 감명 깊은것

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

*/
/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
신규 아이디 추천

function solution(new_id) 
{
    let answer = '';
    const yesMask = '~!@#$%^&*()=+[{]}:?,<>/</>'.split('');

    // 1단계
    new_id = new_id.toLowerCase();
    
    // 2단계
    new_id = [...new_id].filter(c => !yesMask.includes(c)).join('');
    
    // includes는 배열이나 문자열에 사용가능 => 내가 선언한 배열이 이차원은 아닌지 문자열이 맞는지 확인하자

    // 3
    while (true) 
    {
        if (!new_id.includes('..'))
        {
            break;
        }

        new_id = new_id.replace('..', '.');
    }
    
    // 4
    if (new_id[0] == '.')
    {
        new_id = new_id.substring(1,new_id.length);
    }
    if (new_id[new_id.length - 1] == '.')
    {
        new_id = new_id.substring(0,new_id.length - 1);
    }

    // 5
    if (new_id === '')
    {
        new_id = 'a';
    }

    // 6
    if (new_id.length > 15)
    {
        new_id = new_id.substring(0,15);
    }
    //주의 substring의 두번째 인자는 열린구간이다.
    
    if (new_id[14] == '.')
    {
        new_id = new_id.substring(0,14);
    }

    // 7
    if (new_id.length <= 2)
    {
        let word = new_id[new_id.length - 1];
        while (new_id.length < 3)
        {
            new_id = new_id.concat(word);
        }
    }

    return new_id;
}
정규표현식 참고 블로그 : https://hamait.tistory.com/342
*/
/*

코딩테스트 연습
2021 카카오 채용연계형 인턴십
숫자 문자열과 영단어


function solution(s) {
    var answer = 0;
    var numMap = new Map([
        ['zero', '0'], 
        ['one','1'], 
        ['two','2'], 
        ['three','3'],
        ['four','4'], 
        ['five','5'], 
        ['six','6'], 
        ['seven','7'],
        ['eight','8'],
        ['nine','9']
    ]);

    for(e of numMap)
    {
        if (s.includes(e[0]))
        {
            var reg = new RegExp(`${e[0]}`,'g');
            // 정규식사용하는법 알아놓기! 

            s = s.replace(reg, e[1]);
        }
    }
    s= parseInt(s);
    return s;
}
 */

/*

코딩테스트 연습
2020 카카오 인턴십
키패드 누르기

function solution(numbers, hand) {
    var answer = '';
    var keyPad = new Map([
        ['1',[0,0]],
        ['2',[0,1]],
        ['3',[0,2]],
        ['4',[1,0]],
        ['5',[1,1]],
        ['6',[1,2]],
        ['7',[2,0]],
        ['8',[2,1]],
        ['9',[2,2]],
        ['*',[3,0]],
        ['0',[3,1]],
        ['#',[3,2]],
    ]);
    var lefthand = '*';
    var righthand = '#';

    for (const num of numbers)
    {
        if (num === 1 || num === 4 || num === 7)
        {
            answer += ('L');
            lefthand = String(num);
        }
        else if (num === 3 || num === 6 || num === 9)
        {
            answer += ('R');
            righthand = String(num);
        }
        else{
                var leftToTarget = Math.abs(keyPad.get(String(num))[0]-keyPad.get(lefthand)[0]) + Math.abs(keyPad.get(String(num))[1]-keyPad.get(lefthand)[1]);
                var rightToTarget = Math.abs(keyPad.get(String(num))[0]-keyPad.get(righthand)[0]) + Math.abs(keyPad.get(String(num))[1]-keyPad.get(righthand)[1]);

                if (leftToTarget < rightToTarget)
                {
                    answer += ('L');
                    lefthand = String(num);
                }
                else if (leftToTarget > rightToTarget)
                {
                    answer += ('R');
                    righthand = String(num);
                }
                else
                {
                    if (hand === 'left')
                    {
                        answer += 'L';
                        lefthand = String(num);
                    }
                    else
                    {
                        answer += 'R';
                        righthand = String(num);
                    }
                }
        }
    }

    return answer;
}
*/

/*
코딩테스트 연습
2019 카카오 개발자 겨울 인턴십
크레인 인형뽑기 게임


function solution(board, moves) {
    var answer = 0;
    var result = [];

    for(const e of moves)
    {
        var floor = e - 1;
        for(var i =0; i< board.length; i++)
        {
            var data = board[i][floor];

            if (data !== 0)
            {
                if (result.length === 0)
                {
                    result.push(data);
                }
                else
                {
                    var trg = result.pop();

                    if (trg === data)
                    {
                        answer += 2
                    }
                    else
                    {
                        result.push(trg);
                        result.push(data);
                    }
                }

                board[i][floor] = 0;
                break            
            }
        }
    }
    return answer;
}
*/
/*
코딩테스트 연습
2019 KAKAO BLIND RECRUITMENT
실패율

function solution(N, stages) {
    var answer = [];
    var result = new Map();

    for (num of stages)
    {
        if (num > N)
        {
            continue;
        }
        result.set(num, result.get(num) + 1 || 1);
    }


    var count = stages.length;

    for (var i = 1; i <= N; i++)
    {
        var data = result.get(i)
        if (isNaN(data))
        {
            result.set(i,0);
            continue;
        }
        result.set(i,(data / count));
        count -= data;
    }

    const sortedMap = new Map([...result.entries()].sort((a,b) => {
        if (b[1] > a[1])
        {
            return 1;
        }
        else if (b[1] == a[1])
        {
            if (a[0] > b[0])
            {
                return 1;
            }
            else{
                return -1;
            }
        }
        else{
            return -1;
        }
    }));
    answer = [...sortedMap.keys()];
    return answer;
}


//다른 닝겐의 기가맥힌 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

*/


console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));