## HTTP란 무엇인가
---
### 내용 출처
<br />

본 글은 

- https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- https://kamranahmed.info/blog/2016/08/13/http-in-depth/
- https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/

페이지의 내용을 번역 및 정리한 글입니다.

---

### HTTP란?

- `Hypertext Transfer Protocol(이하 HTTP)`는 `World Wide Web(이하 WWW)`의 기초이며 하이퍼텍스트 링크를 사용하여 웹페이지를 로드하는데 사용된다.
- `HTTP`는 네트워크 장치간에 정보를 전송하도록 설계된 `응용 프로그램 계층` 프로토콜이며 네트워크 프로토콜 스택의 다른 계층위에서 실행된다. 
- `HTTP`를 통한 일반적인 흐름은 클라이언트 시스템이 서버에 요청한 다음 응답 메시지를 보내는 것을 포함한다.

---

### HTTP 요청에는 무엇이 있는가?
- `HTTP` 요청은 웹 브라우저와 같은 인터넷 통신 플랫폼이 웹사이트를 로드하는데 필요한 정보를 요청하는 방식이다.
- 인터넷을 통해 이루어진 각 HTTP 요청에는 다양한 유형의 정보를 전달하는 일련의 인코딩된 데이터가 포함된다. 
- 일반적인 HTTP 요청에는 다음이 포함된다.
    1. HTTP 버전 유형
    2. URL
    3. HTTP 메소드
    4. HTTP 요청 헤더
    5. 선택적 HTTP 본문
---

### HTTP 메소드란?
- HTTP 동사라고도 하는 HTTP 메서드는 HTTP 요청이 쿼리된 서버에서 예상하는 작업을 나타낸다. 
- 예를들어, 가장 일반적인 두가지 HTTP 메소드는 `GET` 과 `POST`이다. 
- `GET` 요청은 일반적으로 웹사이트의 형태로 정보가 반환될 것으로 예상하는 반면, `POST` 요청은 일반적으로 클라이언트가 웹서버에 정보를 제출하고 있음을 나타낸다. 

--- 
### HTTP 요청헤더란? 
- HTTP 헤더에는 Key-Value 형태로 저장된 텍스트 정보가 포함되어 있으며 모든 HTTP 요청(및 응답)에 포함된다. 
- 이러한 헤더는 클라이언트가 어떤 브라우저를 사용하고 있으며 어떤 데이터가 요청되고 있는지와 같은 핵심 정보를 전달한다.

- 아래 그림은 'Chrome' 브라우저의 네트워크 탭에서 HTTP 요청 헤더 예시를 확인한 그림이다.

<span align='center'>

![HTTP 요청 헤더](./image/HTTP%20Header%20in%20Chrome.PNG)
[출처] : https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/

</span>

#### HTTP 요청 본문에는 무엇이 있을까?

- 요청 본문은 요청이 전송하는 정보의 '본문' 을 포함하는 부분이다. 
- HTTP 요청의 본문에는 사용자 이름 및 암호 또는 양식에 입력된 기타 데이터와 같이 웹 서버에 제출되는 모든 정보가 포함된다.

--- 
### HTTP 응답에는 무엇이 있을까?
- HTTP 응답은 웹 클라이언트(종종 브라우저)가 HTTP 요청에 대한 응답으로 인터넷 서버에서 받는 것이다. 
- 이러한 응답은 HTTP 요청에서 요청된 내용을 기반으로 중요한 정보를 전달하는데 아래의 내용을 포함한다.
    1. HTTP 상태 코드
    2. HTTP 응답 헤더
    3. 선택적 HTTP 본문

<br />

#### HTTP 상태 코드란?
- HTTP 상태 코드는 HTTP 요청이 성공적으로 완료되었는지 여부를 나타내는데 가장 자주 사용되는 3자리 코드이다. 
- 상태코드는 다음과 같이 5분류로 나뉜다.
    1. 1xx => 정보
    2. 2xx => 성공
    3. 3xx => 리디렉션
    4. 4xx => 클라이언트 오류
    5. 5xx => 서버 오류

- `xx`는 00 ~ 99 사이의 숫자가 들어간다.
- `2xx` 상태코드는 성공을 나타낸다. 예를들어, 클라이언트가 웹 페이지를 요청한 후 가장 흔히 볼 수 있는 응답은 요청이 제대로 완료되었음을 나타내는 `200 OK` 상태 코드를 가진다. 
- 응답이 `4xx` 또는 `5xx` 이면 오류가 있고 웹페이지가 표시되지 않음을 의미한다. `4`로 시작하는 상태코드는 클라이언트 측 오류를 나타낸다. (Ex : URL에 오타가 있으면 `404 NOT FOUND` 상태코드가 발생하는 것이 일반적) `5`로 시작하는 상태 코드는 서버 측에서 문제가 발생했음을 의미한다. 상태코드는 각각 정보 응답 및 리디렉션을 나타내는 `1`또는 `3`으로 시작할 수도 있다.

<br />

#### HTTP 응답 헤더란 무엇일까? 
- HTTP 요청과 마찬가지로 HTTP 응답은 응답 본문에서 전송되는 데이터의 언어 및 형식과 같은 중요한 정보를 전달하는 헤더와 함께 제공된다. 
- 아래 그림은 'Chrome' 브라우저의 네트워크 탭에서 HTTP 응답 헤더 예시를 확인한 그림이다.

<span align='center'>

![HTTP 요청 헤더](./image/HTTP%20Response%20Header%20in%20Chrome.PNG)
[출처] : https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/

</span>

<br />

##### HTTP 응답 본문에는 무엇이 있을까?
- `GET` 요청에 대한 성공적인 HTTP 응답에는 일반적으로 요청된 정보가 포함된 본문이 있다.
- 대부분의 웹 요청에서 이것은 웹 브라우저가 웹 페이지로 번역할 HTML 데이터이다.

---

### (번외) HTTP를 통해 DDoS공격을 할 수 있을까? 
- HTTP 는 `상태 비저장` 프로토콜이며, 이는 각 명령이 다른 명령과 독립적으로 실행됨을 의미한다. 
- 원래 기존 사양에서 HTTP 요청은 각각 TCP 연결을 생성하고 종료되면 연결을 닫는 방식으로 저마다의 HTTP 요청마다 TCP를 연결하고 종료하였었다. 
- 최신버전의 HTTP 프로토콜(HTTP 1.1 이상)에서는 영구 연결을 사용하면 여러 HTTP 요청이 영구 TCP 연결을 통해 전달할 수 있어 리소스 소비가 향상된다. 
- DoS 혹은 DDoS 공격의 맥락에서 대량의 HTTP 요청은 대상 장치에 대한 공격을 시작하는데 사용될 수 있으며 애플리케이션 계층 공격 또는 계층 7 공격의 일부로 간주된다.

---

#### HTTP 1.0 vs HTTP 1.1 

- 이전 HTTP는 연결을 유지하지 않고 요청을 보낼때마다 TCP 연결을 새로 만들어야 했다. 
- `HTTP 1.1` 이 등장하면서 새로운 특징들이 나타났다.
    1. 커넥션 유지(Persistent Connection)
    2. 호스트 헤더(Host Header)
    3. 강력한 인증 절차(Improved Authentication Procedure)\

##### 1. 커넥션 유지 (Persistent Connection)
- HTTP 프로토콜은 클라이언트-서버간 데이터를 주고 받는 응용계층의 프로토콜이다.
- HTTP를 이용한 데이터 전달은 TCP 세션 기반으로 이루어 진다. 

<span align='center'>

![HTTP1.0 vs HTTP 1.1](./image/HTTP1.0vsHTTP1.1.PNG)

</span>

- 즉 기존 HTTP 1.0 은 요청을 보낼때마다 TCP를 연결하고 응답을 받은뒤 연결을 종료한다. 이와 같은 과정이 매 요청마다 반복된다.(1 GET / 1 Connection)
- 반면, HTTP 1.1 에서는 Persistent 기능을 이용하여 한개의 TCP 세션을 통해 여러개의 컨텐츠 요청이 가능하다. (N GET/ 1 Connection)
- 이 차이점을 통해 서버는 TCP 세션 처리 부하를 줄일 수 있고, 그만큼 클라이언트는 응답속도가 개선되어 좋다.

###### 1-1. 파이프라이닝(Pipelining)

- Persistent 기능을 통한 커넥션 유지와 함께 `HTTP 1.1`에서 지원하는 기능이 하나 더 있다. 
- 이는 `파이프라인`기능이다.

<span align='center'>

![Pipelining](./image/PipeLining.PNG)

</span>

- HTTP 요청은 순차적으로 이루어진다.
- 위의 왼쪽 그림과 같이 3개의 컨텐츠를 요청한다고 가정하면 파이프 라이닝 기능이 없는 경우 
- 각각의 요청에 대한 응답을 받으며 진행한다.
- 즉, 이전 요청에 대한 응답을 정상적으로 받아야만 이후 요청이 진행된다는 의미이다.
- 만일 문제가 생겨 응답1이 없는 경우라면 요청2, 요청3은 진행되지 못해 문제가 발생할 수 있고 이는 비효율적이다.
- `파이프라이닝`은 이를 해결하기 위한 기능이다. 
- 위 오른쪽 그림과 같이 동시에 모든 요청(1,2,3)을 보내고 이에 대한 각각의 응답을 받아 처리한다. (만일 응답이 제대로 안오는 경우는?)
- 결과적으로 HTTP에서는 응답 속도를 높혀 페이지 뷰의 속도를 빠르게 할 수 있는 기능이다.

<br />

##### 2. 호스트 헤더(Host Header)
- `버츄얼 호스팅(Virtual Hosting)`이라는 것이 있다.
- HTTP 1.1 로의 발전이 없었다면 불가능한 서비스이다.
- HTTP 1.0 환경에서는 하나의 IP에 여러개의 도메인을 운영할 수 없다.
- 도메인마다 IP를 구분해서 준비해야한다.
- 도메인만큼 서버의 개수도 늘어날 수 밖에 없는 구조이다.
- 이러한 상황속에서 `HTTP 1.1` 에서는 Host 헤더의 추가를 통해 비로소 `버츄얼 호스팅(Virtual Hosting)`이 가능해졌다.

<span align='center'>

![Virtual Hosting](./image/Virtual%20Hosting.PNG)

</span>

<br />

##### 3. 강력한 인증 절차(Improved Authentication Procedure)

- HTTP 1.1 에서 다음 2개의 헤더가 추가되었다.
  - proxy-authentication
  - proxy-authorization

- 실제 서버에서 클라이언트 인증을 요구하는 www-authentication 헤더는 HTTP 1.0 에서부터 지원되어 왔으나, 클라이언트와 서버 사이에 프록시가 위치하는 경우 프록시가 사용자의 인증을 요구할 수 있는 방법이 없었다.

- 위 헤더에 대한 상세 내용은 [여기](https://withbundo.blogspot.com/2017/08/http-17-http-ii-set-cookie-age-www.html)를 참조하도록 하자.

--- 

=> [여기](https://withbundo.blogspot.com/2017/08/http-17-http-ii-set-cookie-age-www.html) 정리

그리고 이것들도 읽고 정리.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- https://kamranahmed.info/blog/2016/08/13/http-in-depth/
- https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/