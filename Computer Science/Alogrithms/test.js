/*
2020 KAKAO BLIND RECRUITMENT
자물쇠와 열쇠


function solution(key, lock) {
    var answer = true;
    console.log(rotate90Arr(key))

    

    return answer;
}

function findKeys(key){

}

function rotate90Arr(arr){
    let temp = Array.from(Array(arr.length), () => Array(arr.length).fill(0));
    for (let i = 0; i<arr.length; i++)
    {
        for (let j = 0; j<arr[i].length; j++)
        {
            temp[j][(arr.length-1)-i] = arr[i][j];
        }
    }
    return temp;
 }

function lockToKey(lock)
{
    let temp = Array.from(Array(lock.length), () => Array(lock.length).fill(0));
    for (let i = 0; i<lock.length; i++)
    {
        for (let j = 0; j<lock[i].length; j++)
        {
            if (lock[i][j] === 0)
            {
                temp[i][j] = 1;
            }
        }
    }
    return temp;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]));
*/

/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
순위 검색

// 이 문제도 순열과 조합을 이용하긴 함=> 조합 혹은 순열을 이용해 해당 info의 가능한 모든 조합을 저장해서 탐색하는 방식으로 진행시킨다.

*/

function solution(info, query) {
    let data = new Map();
    let answer = [];
    



    [...info].map((s) => {
        s = s.split(' ');
        let value = s.pop();
        for(let i=s.length; i > 0; i--)
        {
            let temp = combination(s, i);
            for (let element of temp)
            {   
                element = element.join('');
                data.set(element, parseInt(value));
            }
        }
    });
    
    return answer;
}

function combination(arr, n)
{
    let result = [];
    if (n === 1)
    {
        return arr.map(v => [v]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const temp = combination(rest, n-1);
        const attached = temp.map(a => [fixed, ...a]);

        result.push(...attached);
    });

    return result;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
