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

저는 카카오 문제 풀이 보고 풀었어요!
info를 순회하면서 문자열 파싱 후에 모든 경우의 수(16가지=24 )에 점수를 넣는다.
ex. "javabackendjuniorpizza" [150], "-backendjuniorpizza" [150], ... ,
(저는 중복된 것은 알아서 넣어지도록 저는 C++의 map 컨테이너(key, value) 사용했습니다, value는 vector<int>)

모든 map의 key에 대해서 순회하면서 오름차순 정렬(처음에 빨리 짜다가 query 순회하면서 했다가 시간초과 났어요... 먼저 해주세요!)

query를 순회하면서 query 정보를 문자열 파싱.

해당 문자열을 key로 map에 접근해서 정렬돼있는 배열 뽑아와서 이분탐색.

요렇게 했더니 제가 푼 C++, JavaScript는 통과했습니다.
도움 되시길 바라겠습니다!


function solution(info, query) {
    info.forEach((fixed, index, origin) => {
        
    });
}

function binarySearch(arr, score){
    let low = 0;
    let high = arr.length -1;
    let mid;

    while (low <= high)
    {
        mid = Math.floor(low + high / 2);

        if (score > arr[mid])
        {
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return low;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));

*/