/* 한줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/

// 테스트용 파일 위치 `Computer Science/Alogrithms/백준JS/testCase.txt`

let input = require('fs').readFileSync(`Computer Science/Alogrithms/백준JS/testCase.txt`).toString().split('\n');
const input = require('fs').readFileSync(`Computer Science/Alogrithms/백준JS/testCase.txt`).toString().trim().split('\n');

// 둘의 차이를 확인하기

let n = Number((Number(input.shift())));

const board = Array.from(Array(n), () => [])
let white = 0;
let blue = 0;

for (let i = 0; i < n; i++){
    board[i] = input[i].split(' ').map(Number);
}

console.log(board.slice(0,n/2).map(arr=> arr.slice(0,n/2)))

function recursive(board, n){
    const [flag, base] = checkOneColor(board);

    if(flag){
        if(base === 1){
            blue += 1;
        }else if(base === 0){
            white += 1;
        }
    }else{
        const q1 = board.slice(0,n/2).map(arr=> arr.slice(0,n/2)); .
        // 여기서 보드를 4분할해서 재귀를 돌려야하는디.. 어케해야될까
        // 와 이게되네..ㅋㅋㅋ
    }
}

function checkOneColor(part){
    let base = part[0][0];

    for(let i = 0; i < part.length; i++){
        for(let j = 0; j < part[0].length; j++){
            if(base !== part[i][j]){
                return [false, -1];
            }
        }
    }
    return [true,base];
}

문제 : https://www.acmicpc.net/problem/2630
