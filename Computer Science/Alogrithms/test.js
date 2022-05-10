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

function solution(alp, cop, problems) {
    let answer = 0;
    let data = new Array(problems.length).fill([150,150]);
    
    problems = [...problems].sort((a,b) => ((a[0]+a[1]) - (b[0]+b[1])));
    let index = 0;

    while( index < problems.length)
    {
        let pALP = problems[index][0];
        let pCOP = problems[index][1];

        if (alp >= pALP && cop >= pCOP)
        {
            alp += problems[index][2];
            cop += problems[index][3];
            answer+=problems[index][4];
            index += 1
        }
        else {
            let val1 = (pALP - alp);
            let val2 = (pCOP - cop);
            alp += val1;
            cop += val2;
            answer += val1 + val2;   
        }
    }
    return answer;
}

console.log(solution(10,10,[[10,15,2,1,2],[20,20,3,3,4]]))
console.log(solution(0,0,[[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]]))