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
2019 KAKAO BLIND RECRUITMENT
후보키

function combination(arr, n){
    let result = [];

/*


function rotation(arr1, arr2, sumVal, sum1, sum2)
{
    let count = 0;
    const totalIteration = (arr1.length + arr2.length) * 1.5;

    while(count < totalIteration)
    {    
        
        if(sum1 === sumVal)
        {
            break;
        } 
        if (sum1 > sumVal && sum2 < sumVal)
        {
            let num = arr1.shift();
            arr2.push(num);
            sum1 -= num;
            sum2 += num;
            count += 1;
        }
        
        if(sum1 === sumVal)
        {
            break;
        }

        if (sum2 > sumVal && sum1 < sumVal){
            let num = arr2.shift();
            arr1.push(num);
            sum1 += num;
            sum2 -= num;
            count += 1;
        }
        
        if(sum1 === sumVal)
        {
            break;
        }

    }
    
    if (sum1 === sum2) {
        return count;
    }
    else{
        return -1;
    }
}

function solution(queue1, queue2) {
    const val1 = queue1.reduce((a, b) => a + b, 0);
    const val2 = queue2.reduce((a, b) => a + b, 0);
    const sumVal = parseInt((val1 + val2) / 2); 

    const answer = rotation(queue1,queue2, sumVal, val1, val2)

    return answer;
}


console.log(solution([3, 2, 7, 2],[4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2],[1, 10, 1, 2]));
console.log(solution([1, 1],[1, 5]));
console.log(solution([],[]));
console.log(solution([0,0,0,0,0,0,0],[1,1,1,1,1,1,1]));
2번
*/
/*

3번
*/
/*

function rotation(arr, num)
{
    let dataMap = arr.slice();
    let arrData = [[],[]];
    [...arr.map((element) => {
        arrData[0].push(element[0])
        arrData[1].push(element[element.length-1])
    })];

    let border = arr[0].slice(1,arr[0].length-1).concat(arrData[1]).concat(arr[arr.length-1].reverse().slice(1,arr[0].length-1)).concat(arrData[0].reverse());
    border.unshift(border.pop());

    for (let i = 0; i < num; i++)
    {
        border.unshift(border.pop());
    }

    let i = 0;
    let j = 0;
    let directionI = 0;
    let directionJ = 1;

    while (border.length !== 0)
    {
        dataMap[i][j] = border.shift();

        if (i === 0 && j === dataMap[0].length -1)
        {
            directionI = 1;
            directionJ = 0;    
        }
        else if(i===dataMap.length-1 && j === dataMap[0].length-1)
        {
            directionI = 0;
            directionJ = -1;    
        }
        else if(i===dataMap.length-1 && j === 0)
        {
            directionI = -1;
            directionJ = 0;        
        }

        i += directionI;
        j += directionJ;
    }
    return dataMap;
}

function shiftRow(arr)
{
    let temp = arr.pop();
    return [temp, ...arr];
}

function solution(rc, operations) {

    let count = 0;
    for (const op of operations)
    {
        if (op[0] === 'R')
        {
            count +=1
        }
        else if (op[0] === 'S')
        {
            if (count !== 0)
            {
                rc = rotation(rc,count);
                count = 0;
            }
            rc = shiftRow(rc);
        }
    }

    if (count !== 0)
    {
        rc = rotation(rc,count);
        count = 0;
    }
    return rc;
}

console.log(solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], ["ShiftRow", "Rotate", "ShiftRow", "Rotate"]));

*/

/*
코딩테스트 연습
2018 KAKAO BLIND RECRUITMENT
[1차] 프렌즈4블록

function checkDelete(arr){
    let r = arr.length - 1;
    let c = arr[0].length - 1;
    let mapData = Array.from(Array(arr.length), ()=>new Array(arr[0].length).fill(true));

    for (let i =0; i< arr.length-1; i++)
    {
        for(let j =0; j<arr[i].length -1; j++)
        {
            if(arr[i][j] !== ' '){
                let indexes = [[i,j+1], [i+1,j], [i+1, j+1]];
                let flag = true;
                for (const index of indexes){
                    if (arr[i][j] !== arr[index[0]][index[1]])
                    {
                        flag = false;
                        break;
                    }
                }

                if (flag)
                {
                    mapData[i][j] = false;
                    indexes.map((index) => {
                        mapData[index[0]][index[1]] = false;
                    })
                }
            }
        }
    }
    return mapData;
}

function rebuildArray(arr, mapData){
    let temp = Array.from(Array(arr.length), ()=>Array(arr[0].length).fill(''));
    for (let i=0;i< arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            if (mapData[i][j])
            {
                temp[i][j] = arr[i][j];
            }else{
                temp[i][j] = ' ';
            }
        }
    }
    return temp;
}

function sortColumn(arr){
    let tempArr = Array.from(Array(arr.length).fill(''))
    for(let i =0; i< arr[0].length; i++){
        let temp = '';
        for (let j =0; j<arr.length;j++)
        {
            if (arr[j][i] !== ' ')
            {
                temp += arr[j][i];
            }
        }
        
        while(temp.length < arr.length)
        {
            temp = ' ' + temp;
        }
        for(let j = arr.length-1; j>=0; j--){
            tempArr[j] = [...tempArr[j],temp[j]]
        }
    }
    return tempArr;
}

function checkFalse(mapData)
{
    for (let i = 0; i<mapData.length;i++)
    {
        for (let j =0; j<mapData[i].length;j++)
        {
            if (!mapData[i][j])
            {
                return true;
            }
        }
    }
    return false;
}

function solution(m, n, board) {
    var answer = 0;
    let res = sortColumn(rebuildArray(board,checkDelete(board)));

    while (checkFalse(checkDelete(res)))
    {
        res = sortColumn(rebuildArray(res, checkDelete(res)));
    }
    
    for (let i =0; i<res.length; i++)
    {
        for (let j = 0; j<res[i].length;j++)
        {
            if (res[i][j] === ' ')
            {
                answer+=1;
            }
        }
    }
    return answer;
}

*/

/*

코딩테스트 연습
2018 KAKAO BLIND RECRUITMENT
[1차] 캐시


function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];

    for (let c of cities)
    {
        c = c.toLowerCase();
        let flag = false;

        cache.map((element) => {
            if (element === c)
            {
                flag = true;
            }
        });
        
        if (flag)
        {
            cache = cache.filter((element) => element !== c);
            cache.push(c);
            answer+=1;
        }
        else{
            answer+=5;
            if(cache.length < cacheSize){
                cache.push(c);
            }else if (cache.length === cacheSize && cacheSize !== 0){
                cache.shift();
                cache.push(c);
            }
        }        
    }
    // 약간 큐의 개념을 이용해야하며 만일 중간에 hit되는 요소가 있다면 맨뒤로 옮기고 큐가 초과된다면 맨앞을 제거한 후 맨뒤에 붙인다.
    return answer;
}

*/

/*
코딩테스트 연습
2018 KAKAO BLIND RECRUITMENT
[3차] 방금그곡

}

 */


function solution(m, musicinfos) {
    var answer = '';
    return answer;
}

console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])); //HELLO
