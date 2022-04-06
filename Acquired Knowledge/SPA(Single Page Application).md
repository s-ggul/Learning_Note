## SPA(Single Page Application)
---

<br />

#### 과거의 브라우저

- 오늘날의 페이지에 비해 성능이 떨어짐 
  - 무언가를 클릭하여 화면을 새로고침 할 때마다 새 페이지가 로드되므로 시간이 많이 걸림
- 하지만 단일 페이지(Single Page)의 경우 그렇지 않다 => 사용자가 요청한 데이터만 다시 로드하므로 프로세스가 더 빨라짐

<br />

#### Single Page Application 이란?

- 모든 정보를 동일한 페이지에서 사용할 수 있는 단일 페이지
- 웹 앱의 구성요소를 관리하는데 사용되는 일종의 웹 애플리케이션 아키텍처
- 페이지에서 새로운 요청이 오면 해당 요청에 대한 부분만 새롭게 로드됨
- 항상 기억해야 할 점은 페이지가 프로세스의 어떤 부분에서도 다시 로드되지 않고, 컨트롤을 다른 페이지로 변환하지 않는다는것

<br />

#### Single Page Application 이점

- 좋은 캐싱 능력
- 향상된 사용자 경험
- 신속한 Frontend 개발

<br />

#### Single Page Application 단점
- 검색엔진 최적화가 어려움
- 복잡한 Single Page Application은 빌드시 크기때문에 사용하기 불편할 수 있음

<br />

#### Single Page Application 프레임워크 
- React.js => UI 빌드를 위한 JS 라이브러리
- Angular.js => JS MVVM 프레임워크
- Backbone.js => JS MVC Framework
- Amber.js => 웹앱 구축용

<br />

#### SPA 라우팅
- 어떻게 SPA는 기존 전통적인 웹 사이트와 마찬가지로 브라우징이 가능한 것일까?
- HTML 5의 history api를 이용
- 서버로 요청을 전달하지 않고 자바스크립트 영역에서 history api를 통해 현재 페이지 내에서 화면 이동이 일어난 것처럼 작동하게 하는 것

- history api에는 다음과 같은 메서드가 있다.

`History.back()` : 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드. 브라우저의 뒤로 가기를 누르는 것과 같은 효과

`History.forward()` : 세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드. 브라우저의 앞으로 가기를 누르는 것과 같은 효과

`History.go()` : 특정한 세션 기록으로 이동하게 해 주는 비동기 메서드. 1을 넣어 호출하면 바로 앞 페이지로, -1을 넣어 호출하면 바로 뒤 페이지로 이동

`History.pushState()` : 주어진 데이터를 세션 기록 스택에 넣음. 직렬화 가능한 모든 JavaScript 객체를 저장하는 것이 가능

`History.replaceState()` : 최근 세션 기록 스택의 내용을 주어진 데이터로 교체
이 api를 이용해 주소를 인위적으로 바꾸고, 서버로 페이지 전체를 요청하는 게 아니라 history.state에 담아둔 정보로 ajax 요청을 보내 화면을 갱신하는 것

<br />

#### SPA 프레임워크가 하는 일
- SPA 프레임워크로 유명한 Angular, React, Vue가 하는 일은 무엇? 
- 세부적인 구현 개념은 다르겠지만 그 목적은 모두 SPA를 쉽고 확장성 있게 구현하는 것을 목표.
- 이들은 Virtual DOM이라는 개념을 사용해 SPA를 구현
- SPA의 문제점은 자바스크립트로 인한 DOM 조작이 빈번하게 일어나 브라우저의 성능을 저하시킨다는 것
- Virtual DOM을 사용하는 프레임워크들은 실제 DOM 트리를 흉내 낸 가상의 객체 트리로 html 정보를 저장하고 있다가, 이 트리에 변경이 발생하면 모든 변화를 모아 단 한번 브라우저를 호출해 화면을 갱신하는 방법을 사용
- 이렇게 하면 브라우저와의 불필요한 상호작용을 최소화하면서 인터렉티브한 웹 사이트를 만드는 것이 가능

<br /><br />

##### Reference
- [https://www.excellentwebworld.com/](https://www.excellentwebworld.com/what-is-a-single-page-application/)
- [https://www.huskyhoochu.com/](https://www.huskyhoochu.com/what-is-spa/)