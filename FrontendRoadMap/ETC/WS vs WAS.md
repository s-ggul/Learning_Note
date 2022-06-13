## Web Server(WS) vs Web Application Server(WAS)

--- 

페이지 https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html 의 내용을 정리하며 공부용으로 작성하였습니다.

---

### Static Pages(정적 페이지) 와 Dynamic Pages(동적 페이지)
- 명칭에 나와 있듯이 말그대로 정적인 페이지를 제공하는제 동적으로 페이지를 생성하는지에 대한 차이가 있다. 
- 아래 그림을 보자.

<span align='center'>

![](./image/static-vs-dynamic.png)
[출처] : https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html

</span>

1. Static Pages 
   - `Web Server`는 파일 경로 이름을 받아 경로와 일치하는 file contents(하드웨어적인 의미의 웹서버에 있음)를 반환한다. 
   - 항상 동일한 페이지를 반환한다.
   - Ex) Image, html, css, js 파일과 같이 컴퓨터에 내장되어 있는 파일들

2. Dynamic Pages
   - 인자의 내용에 맞게 동적인 `contents`를 반환한다.
   - 즉, 여기서 `contents`란 웹 서버에 의해 실행되는 프로그램을 통해 만들어진 결과물
   - `Servlet`이란? : WAS 위에서 돌아가는 Java Program
   - 개발자는 Servlet에 doGet()을 구현한다.

---
### Web Server 와 Web Application Server 의 차이

<span align='center'>

![](./image/webserver-vs-was1.png)
[출처] : https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html

</span>

#### Web Server(WS)
1. Web Server(WS) 개념
   - 소프트웨어와 하드웨어로 구분한다.
   - `하드웨어` : `Web Server` 가 설치된 물리적 컴퓨터
   - `소프트웨어` : 웹 브라우저(클라이언트)로부터 HTTP 요청을 받아 정적인 컨텐츠(HTML, CSS, JS, Image... 등등)를 제공하는 컴퓨터 프로그램 

<br />

2. Web Server 의 기능
   - HTTP 프로토콜을 기반으로 하여 클라이언트(웹브라우저 혹은 웹 크롤러)의 요청을 서비스하는 기능을 담당
   - 요청에 따라 두가지 기능중 적절하게 수행한다.
     - 기능 1)
       - 정적인 컨텐츠 제공
       - WAS 를 거치지 않고 바로 자원을 제공(캐시기능인건가?)
     - 기능 2)
       - 동적인 컨텐츠 제공을 위한 요청 전달
       - 클라이언트의 요청(Request)을 WAS에 보내고, WAS가 처리한 결과를 클라이언트에게 전달(응답, Response)한다.
       - 클라이언트는 일반적으로 웹 브라우저를 의미한다.

<br />

3. Web Server의 예
   - Apache Server
   - NginX
   - IIS(Windows 전용 Web Server) 
   - ...

<br />

#### Web Application Server(WAS)

[참고] : https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html


---
### 궁금한 것들(더 알아봐야할 것들)
- WS가 WAS를 거치지 않고 바로 자원을 제공할 수 있다는 말이 있는데 이는 캐시기능을 제공한다는 의미하는 것인가?
