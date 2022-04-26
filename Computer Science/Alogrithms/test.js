/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
메뉴 리뉴얼
- 보류 - 순열 알고리즘 짜야함 


let data = new Map();

function solution(orders, course) {
    var answer = [];

    for (const num of course){
        for (const order of orders)
        {
            dataParse(order, num);
        }
    }
    // 데이터 조합을 찾아 맵핑해주는 함수


    data = [...data].sort((a,b) => b[1] - a[1]);

    for (const num of course){
        let maxCount = -1;
        for (const e of data){
            if (e[0].length == num)
            {
                if (maxCount == -1)
                {
                    maxCount = e[1];
                    answer.push(e[0]);
                }
                else{
                    if (e[1] == maxCount)
                    {
                        answer.push(e[0]);
                    }
                    else if(e[1] < maxCount)
                    {
                        break;
                    }
                }
            }
        }
    }

    answer = answer.sort();
    return answer;
}

function dataParse(s, num){
    s = [...s].sort();
    
    for (let i =0; i<s.length; i ++)
    {
        for(let j = i+1; j<s.length;j++)
        {
            data.set(`${[s[i]+s[j]]}`, data.get(`${[s[i]+s[j]]}`) + 1 || 1);
            // 배열 그대로 사용하게되면 주솟값을 맵핑하는 것 같음 따라서 String으로 변환하고자 JS 템플릿 리터럴을 사용
        }
    }
}

//console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
//console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]));
*/

/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
순위 검색

*/

function solution(info, query) {
    var answer = [];
    let data = [];
    let q = [];
    for (let i = 0; i< info.length; i++)
    {
        data.push(info[i].split(' '));
    }

    q = [...query].map(s => { return s.split(' and ')});
    
    console.log(q)

    return answer;
}


console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));