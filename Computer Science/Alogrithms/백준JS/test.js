/* 한줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\r\n');
let nums = input[0].split(' ')
nums = nums.map(num => parseInt(num))
console.log(nums[0] + nums[1])