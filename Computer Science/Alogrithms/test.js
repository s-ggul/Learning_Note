/*
2020 KAKAO BLIND RECRUITMENT - 괄호 변환


function solution(p) {
    var answer = '';

    answer = recursive(p)
    return answer;
}

function recursive(p)
{
    if (p === '')
    {
        return '';
    }
    else
    {
        let countL = 0;
        let countR = 0;
        let u = '';
        let v = '';

        for (let i =0; i < p.length; i++)
        {
            if (p[i] === '(')
            {
                countL += 1;
            }
            else
            {
                countR += 1;
            }

            if (countL === countR)
            {
                u = p.slice(0,i+1);
                v = p.slice(i+1,p.length);
                break;
            }
        }

        if (checkOk(u))
        {
            return u + recursive(v);
        }
        else
        {
            let temp = '';
            u = u.slice(1,u.length-1);
            for (const c of u)
            {
                if (c === '(')
                {
                    temp += ')';
                }
                else
                {
                    temp += '(';
                }
            }

            return '(' + recursive(v) + ')' + temp;
        }
    }
}

function checkOk(p)
{
    let data = [];
    for (const c of p)
    {
        if (c === '(')
        {
            data.push(c);
        }
        else
        {
            let d = data.pop();
        }
    }

    if (data.length === 0)
    {
        return true;
    }else{
        return false;
    }
}
*/

/*
2018 KAKAO BLIND RECRUITMENT - [1차] 뉴스 클러스터링

 */

function solution(str1, str2) {
    var answer = 0;
    return answer;
}

console.log(solution("()))((()"));
console.log(solution("(()())()"));
console.log(solution(")("));