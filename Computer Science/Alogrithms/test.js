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

- 다중 집합의 원리를 잘 파악해야 했음 

function divide(p)
{
    let temp = [];
    let reg = new RegExp(/[a-z][a-z]/);

    for (let i =0; i < p.length-1; i ++){
        var data = p.slice(i,i+2);

        if (reg.test(data)){
            temp.push(data);
        }
    }
    return temp
}


function solution(str1, str2) {
    var answer = 0;
    let strD1 = divide(str1.toLowerCase()); 
    let strD2 = divide(str2.toLowerCase());
    let temp = strD2.slice();//strD2를 깊은 복사

    let intersection = [...strD1].filter(x => {
        if (temp.includes(x))
        {
            temp.splice(temp.indexOf(x),1)
            return true;
        }
        else{
            return false;
        }
    });

    let tempInter = intersection.slice();
    //intersection을 깊은 복사

    let total = [...strD1].filter(x => {
        if (tempInter.includes(x))
        {
            tempInter.splice(tempInter.indexOf(x),1);
            return false;
        }
        else
        {
            return true;
        }
    }).concat(strD2);

    
    if (total.length !== 0){
        answer = (intersection.length/total.length) * 65536;
    }
    else{
        answer = 65536;
    }

    return Math.floor(answer);
}
 */
/*
2020 카카오 인턴십 - 수식 최대화

*/
function solution(expression) {
    var orders = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
    ];
    let answer = -1;
    for (const order of orders){
        var res = parseInt(recursive(order,0,expression));
        if (res < answer)
        {
            answer = res;
        }
    }


    return answer;
}

function recursive(order,n, expr)
{
    let temp = [];
    if (n == 2)
    {
        return eval(expr);
    }
    else
    {
        if (order[n] == '*')
        {
            
        }
        else if(order[n] == '-')
        {   
            
        }
        else if(order[n] == '+')
        {
            
        }
    }
    return temp;
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));