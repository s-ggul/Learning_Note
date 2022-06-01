/* 한줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/

// 테스트용 파일 위치 `Computer Science/Alogrithms/백준JS/testCase.txt`

let input = require('fs').readFileSync(`Computer Science/Alogrithms/백준JS/testCase.txt`).toString().split('\n');

