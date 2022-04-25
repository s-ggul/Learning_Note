/*
코딩테스트 연습
2021 KAKAO BLIND RECRUITMENT
메뉴 리뉴얼
*/
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