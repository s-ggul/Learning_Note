## HTTP란?
---

<br />

### HyperText Transfer Protocol
- 하이퍼텍스트(HTML) 문서를 전송하기 위해 만들어진 protocol(통신 규약)
- 즉, 웹상에서 네트워크로 서버끼리 통신을 할때 어떠한 형식으로 서로 통신을 하자고 규정해 놓은 `통신 형식` 혹은 `통신구조`
- 프론트엔드 서버와 클라이언트간 통신에 사용된다.
- 프론트엔드와 백엔드간 통신에도 사용된다.
- HTTP는 TCP/IP 모델에서 동작한다.

---

### HTTP 핵심요소

<br />

#### HTTP 통신 방식
- HTTP는 기본적으로 요청/응답(request/response) 구조로 되어있다.
  - 클라이언트가 HTTP request 를 서버에 보내면 서버는 HTTP response를 보내는 구조.
  - 클라이언트와 서버의 모든 통신이 요청과 응답으로 이루어진다.

- HTTP는 Stateless이다.
  - Stateless란 말 그대로 state(상태)를 저장하지 않는다는 뜻
  - 즉, 요청이 오면 그에 응답을 할 뿐, 여러 요청/응답끼리 연결되어 있지 않다는 뜻이다. => 즉, 각각의 요청/응답은 독립적인 요청/응답이다.
  - 예를들어 클라이언트가 요청을 보내고 응답을 받은 뒤 잠시후 다시 요청을 보낼때 전에 보낸 요청/응답에 대해 알지 못한다는 뜻이다.
  - 그래서 만일 여러 요청과 응답의 진행과정이나 데이터가 필요할때는 쿠키나 세션등등을 사용하게 된다.

---

#### HTTP Request 구조
- HTTP request 메세지는 크게 3부분으로 구성된다.

1. start line
2. headers
3. body

##### Start Line
- 말 그대로 HTTP request의 첫 라인
- HTTP Request의 start line 또한 3부분으로 구성되어있다.
  
  1. HTTP Method
     - 해당 Request가 의도한 action을 정의하는 부분
     - HTTP Method에는 GET, POST, PUT, DELETE, OPTIONS 등등이 있다.
  2. Request Target
     - 해당 Request가 전송되는 목표 URL
     - EX : /login
  3. HTTP Version
     - 말 그대로 사용되는 HTTP 버전
     - 버전에는 1.0, 1.1, 2.0 등이 있다.

##### Headers
- 해당 request에 대한 추가 정보를 담고 있는 부분
- 예를 들어, request 메세지 body의 총 길이(Content-Length 등)
- Key:Value 쌍으로 되어있다.(`:`을 사용)
  - EX : HOST : google.com => Key = HOST, Value = google.com
- Headers도 크게 3부분(general headers, request headers, entity headers)으로 나뉜다.
- 자주 사용되는 Header정보로는 다음이 있다.
  - Host : 요청이 전송되는 target의 host url (EX:naver.com)
  - User-Agent : 요청을 보내는 클라이언트 정보(EX : 웹브라우저에 대한 정보)
  - Accept : 해당 요청이 받을 수 있는 응답(Response) 타입
  - Connection : 해당 요청이 끝난 후 클라이언트와 서버가 계속해서 네트워크 커넥션을 유지할 것인지 아니면 끊을 것인지에 대해 지시하는 부분
  - Content-Type : 해당 요청이 보내는 메세지 body의 타입 (EX : JSON을 보낸다면 application/json)
  - Content-Length : 메세지 body의 길이

##### Body
- 해당 request의 실질적인 메세지/내용
- Body가 없는 Request도 있다.(Get 요청의 경우)

---

#### HTTP Response 구조 
-Response도 request와 마찬가지로 크게 3부분으로 구성되어있다. 

1. status line
2. headers
3. body

##### Status Line
- Response의 상태를 간략하게 나타내 주는 부분으로 3부분으로 구성된다.

  1. HTTP 버전
  2. Status Code
     - 응답 상태를 나타내는 코드. 숫자로 되어있다.(EX : 200, 404 ...)
  3. Status Text
     - 응답 상태를 간략하게 설명해주는 부분(EX : "Not Found")

```js
HTTP/1.1 404 "Not Found"
```

##### Headers 
- Responsedml headers와 동일하다.
- 다만 response에서만 사용되는 header값들이 있다.(EX : Request에슨 User-Agent 있는 반면 Response에는 Server 헤더가 사용된다.)


##### Body 
- Response의 body와 일반적으로 동일하다.
- Request와 마찬가지로 모든 response가 body가 있지는 않다. 데이터를 전송할 필요가 없을 경우 body가 비어있게 된다.

---

### 자주 쓰이는 HTTP Methods

<br />

#### GET 
- 이름 그대로 어떠한 데이터를 서버로부터 받아(GET)올때 주로 사용하는 Method
- 데이터 생성/수정/삭제 없이 받아오기만 할때 사용된다.
- 가장 간단하고 많이 사용되는 HTTP Method
- 언급한대로 주로 데이터를 받아올 때 사용되기 때문에 request body를 안보내는 경우가 많다.

#### POST
- 데이터를 생성/수정/삭제 할때 주로 사용되는 Method
- 데이터를 생성 및 수정할 때 많이 사용하기 때문에 대부분의 경우 request body가 포함되어서 보내진다.

---

### 알고 있으면 좋은 HTTP Methods

<br />

#### OPTIONS
- 주로 요청 URI에서 사용할 수 있는 Method를 받아올 때 사용된다.
- 예를들어, /update uri에서 어떤 method를 요청 가능한가(GET ? POST ? ) 를 알고싶으면 먼저 OPTIONS 요청을 사용해서 확인하면 된다.

#### PUT
- POST와 비슷하다. 데이터를 생성할 때 사용하는 Method
- POST와 겹치기 때문에 PUT을 사용하는 곳도 있고, POST로 통일해서 사용하는 곳도 있다. 최근 추세로는 POST에 밀려 잘 사용안되고 있다.

#### DELETE
- 특정 데이터를 서버에서 삭제 요청을 보낼 때 쓰이는 Method
- PUT 과 마찬가지로 POST에 밀려 잘 사용되지 않는다.

---

### 자주 쓰이는 HTTP Status Code

<br />

#### 200 OK
- 가장 자주 보게되는 status code
- 문제없이 잘 실행 되었을 경우 보내지는 코드이다.

#### 301 Moved Permanently
- 해당 URI가 다른 주소로 바뀌었을때 보내는 코드이다.

#### 400 Bad Request
- 해당 요청이 잘못된 요청일 때 보내는 코드
- 주로 요청에 포함된 input 값들이 잘못된 값들이 보내졌을 때 사용되는 코드
- 예를 들어, 전화번호를 보내야 되는데 text가 보내졌을때 등등

#### 401 Unauthorized
- 유저가 해당 요청을 진행 하려면 먼저 로그인을 하거나 회원 가입을 하거나 등등이 필요하다는 것을 나타내려 할 때 쓰이는 코드

#### 403 Forbidden
- 유저가 해당 요청에 대한 권한이 없다는 뜻
- 예를 들어, 오직 과금을 한 유저만 볼 수 있는 데이터를 요청했을 때 등

#### 404 Not Found
- 요청된 URI가 존재하지 않는다는 뜻

#### 500 Internal Server Error
- 서버에서 에러가 났을때 사용되는 코드
- API 개발을 하는 백엔드 개발자들이 싫어하는 코드

<br /><br />

[참조] : https://velog.io/@teddybearjung/HTTP-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%95%B5%EC%8B%AC-%EC%9A%94%EC%86%8C

---