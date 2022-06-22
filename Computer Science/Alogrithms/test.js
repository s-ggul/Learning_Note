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


//-------------------------------SKT 코딩 테스트---------------------------------

/*
function solution(p) {
    // 배열의 길이, 인덱스 i, counter 배열 선언
    let i = 0;
    const n = p.length;
    const counter = Array(n).fill(0);

    // while문은 i가 n과 같아지기 전까지만 실행
    while(i !== n){
        let minNum = n+1;
        let changeIndex = 0;

        for(let j = i; j < n; j++){
            if(p[j] < minNum){
                minNum = p[j];
                changeIndex = j;
            }
        }

        // 위치 변경
        const temp1 = p[i];
        const temp2 = p[changeIndex];
        p[i] = temp2;
        p[changeIndex] = temp1;


        // 각 자리에서 이전값의 위치와 다른 경우 counter 를 증가
        if(temp1 !== p[i]){
            counter[i] += 1;
        }
        if(temp2 !== p[changeIndex]){
            counter[changeIndex] += 1;
        }
        
        i += 1;
    }

    return counter;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/

/*

function solution(periods, payments, estimates) {
    const answer = [0 , 0];

    for(let i = 0; i< periods.length; i++){
        const period = periods[i];
        const nextPeriod = period+1;
        const payment = payments[i];
        const estimate = estimates[i];

        // 현월 기준 12개월간 납부금액
        const prev = payment.reduce((acc, cur) => {return acc + cur});
        
        // 이후 월 기준 12개월간 납부금액
        const nextPayment = payment.slice(1);
        nextPayment.push(estimate);
        const next = nextPayment.reduce((acc, cur) => {return acc + cur});


        // VIP 여부 체크
        let vipPrev = false;
        let vipNext = false;

        // 현재기준
        if (period < 24){
            vipPrev = false;
        }
        else if (period < 60){
            if(prev >= 900000){
                vipPrev = true;
            }
        }
        else{
            if(prev >= 600000){
                vipPrev = true;
            }
        }
        
        // 다음달 기준
        if (nextPeriod < 24){
            vipNext = false;
        }else if (nextPeriod < 60){
            if(next >= 900000){
                vipNext = true;
            }
        }else{
            if(next >= 600000){
                vipNext = true;
            }
        }

        if(vipPrev===false && vipNext===true){
            answer[0] +=1;
        }

        else if(vipPrev===true && vipNext===false){
            answer[1] +=1;
        }

    }
    return answer;
}

console.log(solution(
    [20, 23, 24], [[100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], [350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]], [100000, 100000, 100000]));

*/
/*
function solution(n, plans, clients) {
    const answer = Array(clients.length).fill(0);
    const tempPlans = [];
    // 요금제 문자열 파싱 => 앞선 요금제(오름차순)의 서비스를 추가 시키는 방식으로   
    for(let i =0; i< plans.length; i++){
        const arr = plans[i].split(' ').map(n => parseInt(n));
        if(i === 0){
            tempPlans.push([arr[0], arr.slice(1)]);
        }else{
            tempPlans.push([arr[0], [...tempPlans[i-1][1], ...arr.slice(1)].sort()])
        }

    }

    plans = tempPlans;

    // 클라이언트 문자열 파싱
    clients = clients.map(e => {
        const arr = e.split(' ').map(n => parseInt(n));
        return [arr[0], arr.slice(1)];
    });

    // 요금제별 비교 연산
    // 외부 for문 => 클라이언트 
    // 내부 for문 => 요금제
    for(let i = 0; i < clients.length; i++){
        const [data, services] = clients[i]
        let plan = 0;

        for(let j = 0; j < plans.length; j++){
            const [pData, pServices] = plans[j];
            if(pData < data){
                continue;
            }
            else{
                const interSection = pServices.filter(n => services.includes(n)).join('');
                if(interSection === services.join('')){
                    plan = j+1;
                    break
                }
            }
        }
        answer[i] = plan;
    }
    return answer;
}
*/
//console.log(solution(4, ["38 2 3", "394 1 4"], ["10 2 3", "300 1 2 3 4", "500 1"]));
//console.log(solution(5, ["100 1 3", "500 4", "2000 5"], ["300 3 5", "1500 1", "100 1 3", "50 1 2"]));

function solution(grid, k) {
    let answer = -1;
    const n = grid.length;
    const m = grid[0].length;
    const board = [];
    const counter = [];

    // 입력 그리드 파싱
    for(const str of grid){
        board.push(str.split(''));
    }

    // 각 맵에서 도착할 수 있는 루트를 모두 구함
    const routes = bfs(board, 0, 0, n, m);

    // 각 루트별로 야영횟수를 카운트
    for(const route of routes){
        let restCount = 0;
        let forestCount = 0;
        let totalCount = 0;

        for(let i = 0; i<route.length; i++){
            const r = route[i]; 
            if(r === '.'){
                totalCount += 1;
            }
            else if(r === 'F'){
                forestCount += 1;
                totalCount += 1;
            }

            if(totalCount > k+1){
                if(r === '.'){
                    restCount += 1;
                    totalCount = 1;
                    forestCount = 0;
                }
                else if(r === 'F'){
                    restCount += 1;
                    totalCount = forestCount;
                }
            }            
            
        }
        counter.push(restCount);
    }
    answer = Math.min.apply(null, counter);
    return answer;
}

// 방향전환
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 매개변수로 들어온 board 에서 경로를 뽑는 용도
function bfs(board, startX, startY, n, m){
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const total = [];
    const q = [];
    q.push([startX, startY, [board[startX][startY]]]);
    visited[startX][startY] = true;

    while(q.length !== 0){
        const data = q.shift();
        const x = data[0];
        const y = data[1];
        const route = data[2];

        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && nx < n && ny >= 0 && ny < m){
                if(visited[nx][ny] === true){
                    continue;
                }

                if(board[nx][ny] === '#'){
                    visited[nx][ny] = true;
                    continue;
                }

                if(nx === n-1 && ny === m-1){
                    total.push([...route,board[nx][ny]]);
                    continue;
                }

                q.push([nx, ny, [...route, board[nx][ny]]]);
                visited[nx][ny] = true; 
            }
        }
    
    }

    return total;
}
//console.log(solution(["..FF", "###F", "###."], 4));
//console.log(solution(["..FF", "###F", "###."], 5));
//console.log(solution([".F.FFFFF.F", ".########.", ".########F", "...######F", "##.######F", "...######F", ".########F", ".########.", ".#...####F", "...#......"], 6));
// console.log(solution(["..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................","..................................................",".................................................."],2));
//-------------------------------SKT 코딩 테스트---------------------------------