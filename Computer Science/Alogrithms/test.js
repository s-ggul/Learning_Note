/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
순위 검색

// 이 문제도 순열과 조합을 이용하긴 함=> 조합 혹은 순열을 이용해 해당 info의 가능한 모든 조합을 저장해서 탐색하는 방식으로 진행시킨다.



function solution(info, query) {
    let answer = Array.from(Array(query.length).fill(0));
    let score = [];
    let queryScore = [];
    let q = [];
    
    let reg = new RegExp(/ and /,'g');
    query = [...query].map(s => s.replace(reg, ' '));
    q = [...query].map(s =>{
        s = s.split(' ');
        queryScore.push(parseInt(s[4]));
        s = s.slice(0,4)
        s = s.join('');
        return s.split('-');;
    });


    info = [...info].map(s => {
        s = s.split(' ');
        score.push(parseInt(s[4]));
        s = s.slice(0,4);
        return s.join('');
    });
    
    
    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));

*/

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
메뉴 리뉴얼
- 보류 - 순열 알고리즘 짜야함 
*/

let data = new Map();

function solution(orders, course) 
{
    let answer = [];
    return answer;
}


function combination(s, n){

    if (n == 1)
    {
        return [...s].map((v) => [v]);
    }



}

//console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
//console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]));
