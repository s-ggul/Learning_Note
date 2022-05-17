/* 한줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/

// 테스트용 파일 위치 `Computer Science/Alogrithms/백준JS/testCase.txt`

let input = require('fs').readFileSync(`Computer Science/Alogrithms/백준JS/testCase.txt`).toString().split('\r\n');

const [n, m] = input[0].split(' ').map(num => parseInt(num))



function BFS(startNum){
    // startNum에 대한 케빈베이컨 수를 구함
}