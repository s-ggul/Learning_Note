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
    let l = relation[0].length;

    const indexArr = Array.from({length:l}, (v,i) => i);

    for (let i =1; i<=l;i++)
    {
        comb = combination(indexArr, i);
        comb.map((element) => data.set([...element].join(''), []));
    }
    
    const keyList = data.keys();

    for (const key of keyList)
    {
        let indexData = key.split('');

        for (let i =0; i<relation.length; i++)
        {
            let temp = [];
            for(const index of indexData)
            {
                temp.push(relation[i][index]);
            }
            
            let comb = combination(temp, temp.length);
            let value = data.get(key);

            comb = comb.map((arr) => {
                arr= arr.join('');
                value.push(arr);
            });                
            data.set(key, value)
        }
        
        let d= data.get(key);


        data.set(key,[...new Set(d)]);
    }
    
    let tuple = [...data.keys()].filter((key) => data.get(key).length == relation.length);
    let subKeys = [];

    for(const c of tuple){
        if (subKeys.length === 0)
        {
            subKeys.push(c);
            continue;
        }
        let flag = true;
        

        for (const key of subKeys)
        {
            let count = 0;
            for (const num of key)
            {
                if (c.includes(num)){
                    count += 1;
                }
            }

            if (count === key.length){
                flag = false;
                break;
            }
        }
        
        if (flag)
        {
            subKeys.push(c)
        }
    }
    return subKeys.length;
}
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

*/

function solution(cacheSize, cities) {
    var answer = 0;

    // 큐를이용해야하며 만일 중간에 hit되는 요소가 있다면 맨뒤로 옮기고 큐가 초과된다면 맨앞을 제거한 후 맨뒤에 붙인다.
    

    return answer;
}

console.log(solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));