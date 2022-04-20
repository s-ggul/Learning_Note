## Javascript 자료구조 및 메서드 정리

---

<br />

#### Array
<span align='center'>

![Array](images/array.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 :
  - 생성 및 사용이 간편하다
  - 복잡한 데이터 구조를 위한 기본 빌딩 블록이다.
- 단점:
  - 고정된 크기
  - 값을 삽입하거나 삭제할때 많은 비용
  - 비효율적인 정렬

##### JS Array 사용법

```js 
var arrNumber = new Array(); //배열선언
var arrNumber = new Array("a","b","c","d");
var arrNumber = [1,2,3,4]; 


```

##### 정적 메서드
- Array.from()
    - 유사 배열 또는 반복 가능한 객체로부터 새로운 Array인스턴스를 생성
- Array.isArray()
  - 만약 매개변수가 배열이면 참을, 아니면 거짓을 반환
- Array.of()
  - 매개변수의 수와 자료형에 제한없이, 지정한 값을 사용해 새 Array 인스턴스를 생성

##### 인스턴스 속성
- Array.prototype.length
  - 배열의 원소 수를 나타냄

##### 인스턴스 메서드

- Array.prototype.at()
  - 주어진 인덱스의 요소를 반환, 음수값을 지정할 경우 인덱스를 배열의 끝부터 셈
- Array.prototype.concat()
  - 배열과 배열/값 매개변수를 이어붙인 새로운 배열을 반환
- Array.prototype.copyWithin()
  - 배열 내의 지정된 요소들을 동일한 배열 내에서 복사합니다.

- Array.prototype.entries()
  - 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 배열 반복자 객체를 반환합니다.

- Array.prototype.every()
  - 배열의 모든 요소가 주어진 판별 함수를 만족할 경우 true를 반환합니다.

- Array.prototype.fill()
  - 배열을 시작 인덱스부터 끝 인덱스까지의 지정한 값으로 채웁니다.

- Array.prototype.filter()
  - 지정한 필터 함수의 반환 결과가 true인 요소만 모아서 새로운 배열을 반환합니다.

- Array.prototype.find()
  - 주어진 판별 함수를 만족하는 첫 번째 요소를 반환합니다. 만족하는 요소가 없으면 undefined를 반환합니다.

- Array.prototype.findIndex()
  - 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 -1를 반환합니다.

- Array.prototype.flat()
  - 배열 내의 모든 중첩 배열을 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 반환합니다.

- Array.prototype.flatMap()
  - 배열의 모든 요소 각각에 대해 주어진 콜백 함수를 호출하고, 그 반환 값을 모아 새로운 배열을 생성한 후, 모든 중첩 배열을 이어붙여 평탄화해 반환합니다.

- Array.prototype.forEach()
  - 배열의 각각의 요소에 대해 함수를 호출합니다.

- Array.prototype.includes()
  - 배열이 주어진 값을 포함하는지 판별해 true 또는 false를 반환합니다.

- Array.prototype.indexOf()
  - 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환합니다. 없으면 -1을 반환합니다.

- Array.prototype.join()
  - 배열의 모든 요소를 문자열로 합칩니다.

- Array.prototype.keys()
  - 배열의 각 인덱스에 대한 키를 가지는 새로운 배열 반복자 객체를 반환합니다.

- Array.prototype.lastIndexOf()
  - 배열에서 주어진 값과 일치하는 제일 뒤의 인덱스를 반환합니다. 없으면 -1을 반환합니다.

- Array.prototype.map()
  - 배열의 모든 요소 각각에 대하여 주어진 콜백 함수를 호출하고, 그 반환 값을 모은 새로운 배열을 반환합니다.

- Array.prototype.pop()
  - 배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.

- Array.prototype.push()
  - 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 변경된 length를 반환합니다.

- Array.prototype.reduce()
  - 주어진 콜백 함수를 가산기와 요소 각각에 대해 (왼쪽에서 오른쪽으로) 호출하여 하나의 값으로 줄인 결과를 반환합니다.

- Array.prototype.reduceRight()
  - 주어진 콜백 함수를 가산기와 요소 각각에 대해 (오른쪽에서 왼쪽으로) 호출하여 하나의 값으로 줄인 결과를 반환합니다.

- Array.prototype.reverse()
  - 배열의 요소 순서를 뒤집습니다. 즉 첫 번째 요소가 마지막이 되고 마지막이 첫 번째가 됩니다.

- Array.prototype.shift()
  - 배열에서 첫 번째 요소를 삭제하고, 그 요소를 반환합니다.

- Array.prototype.slice()
  - 배열의 일부를 추출한 새 배열을 반환합니다.

- Array.prototype.some()
  - 배열의 어떤 요소가 주어진 판별 함수를 만족할 경우 true를 반환합니다.

- Array.prototype.sort()
  - 배열의 요소를 정렬하고 그 배열을 반환합니다.

- Array.prototype.splice()
  - 배열에서 요소를 추가하거나 삭제합니다.

- Array.prototype.toLocaleString()
  - 배열과 그 요소를 나타내는 지역화된 문자열을 반환합니다. Object.prototype.toLocaleString() 메서드를 재정의합니다.

- Array.prototype.toString()
  - 배열과 그 요소를 나타내는 문자열을 반환합니다. Object.prototype.toString() 메서드를 재정의합니다.

- Array.prototype.unshift()
  - 배열의 앞에 하나 이상의 요소를 추가하고, 배열의 변경된 length를 반환합니다.

- Array.prototype.values()
  - 배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.

- Array.prototype[@@iterator]()
  - 배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.

<br />

#### Queue

<span align='center'>

![Queue](images/queue.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 : 
  - 동적 크기
  - 데이터를 받은 순서대로 쌓는다.
  - 작은 실행시간
- 단점 : 
  - 가장 오래된 요소만 검색할 수 있다.
  

<br />

#### Linked List

<span align='center'>

![Linked List](images/linkedList.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 : 
  - 새로운 요소의 효율적인 삽입 및 제거 
  - 배열을 재구성하는 것보다 덜 복잡함
- 배열보다 더 많은 메모리를 사용
- 특정 요소를 검색하는데 비효율적
- 목록을 역방향으로 탐색하는것은 비효율적
  
<br />

#### Tree

<span align='center'>

![Tree](images/tree.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 :
  - 계층적 관계 저장에 이상적
  - 동적 크기
  - 빠른 삽입 및 삭제 작업
  - 이진 검색 트리에서 삽입된 노드는 즉시 시퀀싱
  - 이진 검색 트리는 검색에 효율적
- 단점 :
  - 노드 재정렬 속도가 느림
  - 자식노드에는 부모 노드에 대한 정보가 없음
  - 이진 검색 트리는 더 복잡한 해시 테이블만큼 빠르지 않음
  - 균형잡인 하위 트리로 구현되지 않으면 이진 탐색 트리가 선형 탐색으로 변질될 수 있음


<br />

#### Graphs

<span align='center'>

![Graph](images/graph.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 : 
  - 텍스트보다 시각적으로 빠르게 전달할 수 있음
  - 관계형 구조를 포함하는 한 다양한 주제를 모델링하는데 사용 가능
- 단점 :
  - 더 높은 수준에서 텍스트는 이미지로 변환하는데 시간이 많이 걸릴 수 있음
  - 기존 가장자리 또는 주어진 정점이 연결된 가장자리의 수를 보는것이 어려울 수 있음
<br />

#### Hashtable/map

<span align='center'>

![Hashtable](images/hashtable.PNG)
[출처] : https://www.educative.io/blog/javascript-data-structures#questions]

</span>

- 장점 : 
  - 키는 모든 형식이 될 수 있지만 배열의 인덱스는 정수여야함
  - 고휴율검색기능
  - 각 검색에 대한 일정한 작업수
  - 삽입 또는 삭제 작업에 대한 일정한 비용
- 단점 :
- 충돌 : 두 개의 키가 동일한 해시 코드로 변환되거나 두 개의 해시코드가 동일한 값을 가리킬 때 발생하는 오류
- 이러한 오류는 일반적일 수 있으며 종종 해시 함수의 정밀검사가 필요 
  
<br />
