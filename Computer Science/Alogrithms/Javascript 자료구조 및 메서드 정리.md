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
