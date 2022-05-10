## Web Server(WS) vs Web Application Server

---

<br />

### Web Server
- Client 로 부터 요청을 받아 Web Container로 전송 
- Web Container에서는 동적으로 data를 처리(Ex : JSP, ASP, PHP...)

### Web Application Server
- Web Server 와 Web Container가 하나로 합쳐 배포된 형태일 수 도 있고, 분리된 형태로 배포될 수 Container의 기능만 할 수 도 있음
- JSP, ASP, PHP 등 사용자의 입력을 받아 무언가를 처리하고 결과를 보여주는 등 동적인 데이터를 처리하는 웹서버 (DB조회, 로직처리 요구되는 컨텐츠)

### WS와 WAS를 분리하면 좋은 이유
- 데이터 처리 방식이 달라 정적 컨텐츠를 굳이 WAS에서 처리하여 부하를 줄 필요가 없다.
- 사용자들에게 WAS는 공개될 필요가 없다.(보안)
- 여러대의 WAS를 연결가능하다. (로드 밸런싱의 역할 및 fail over, fail back 처리에 유리)
- 여러 웹 어플리케이션 서비스가 가능하다.(Java 서버, C#서버, php 서버 등을 하나의 웹서비스를 통해 서비스 가능)

### 아파치 웹서버와 아파치 톰켓의 차이
-아파치 웹서버 : Web Server
-아파치 톰켓 : WAS

[참고] : https://velog.io/@away0419/WS-WAS-%EC%B0%A8%EC%9D%B4