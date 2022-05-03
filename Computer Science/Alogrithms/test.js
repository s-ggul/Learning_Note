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

function combination(arr, n){
    let result = [];

    if(n===1){return arr.map(v => [v])}

    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index+1);
        let temp = combination(rest, n-1);
        let newArr = temp.map((comb) => [fixed, ...comb]);
        result.push(...newArr);
    });

    return result;
}

function solution(relation) {
    var answer = 0;
    let data = new Map();

    for (let i=0; i< relation.length; i++)
    {

    }
    return answer;
}
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));
