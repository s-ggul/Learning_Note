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
    let answer = [];
    let lang = ['cpp','java','python','-'];
    let part = ['backend', 'frontend', '-'];
    let career = ['junior', 'senior', '-'];
    let food = ['chicken', 'pizza', '-'];
    let data = new Map();

    for (const l of lang)
    {
        for(const p of part)
        {
            for(const c of career)
            {
                for(const f of food)
                {
                    data.set(l+p+c+f, []);
                }
            }
        }
    }

    console.log(data)
    return answer;
}

/*
1. 먼저 모든 경우에대한 문자열 조합을 만든다. 이때 combination이 아닌 `-`을 포함한 문자열 
2. 그후 각각의 문자열 별로 점수리스트를 만든다. 
3. 해당 점수 리스트에서 이분탐색을 진행한다. 

굿굿
이렇게 해보장자라장자자라자라장!
*/

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
