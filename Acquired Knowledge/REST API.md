## Rest API

---

<br />

1. Rest API의 탄생
- `REST`(Representational State Transfer라는 용어의 약자)는 2000년도에 로이 필딩의 박사학위 논문에서 최초로 소개됨
- 로이 필딩은 `HTTP`의 주요 저자 중 한 사람으로 그 당시 웹(HTTP) 설계의 우수성에 비해 제대로 사용되어지지 못하는 모습에 안타까워하며 웹의 장점을 최대한 할용할 수 있는 아키텍처로써 REST를 발표했다.

<br />

2. REST의 구성
- 쉽게 말해 REST API는 다음의 구성으로 되어있다.
    - 자원(Resource) => URI
    - 행위(Verb) => HTTP Method
    - 표현(Representations)

<br />

3. Rest의 특징

- Uniform(유니폼 인터페이스)
  - Uniform Interface는 URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일을 말한다.
- Stateless(무상태성)
  - Rest는 무상태성 성격을 가진다.
  - 다시 말해 작업을 위한 상태정보를 따로 저장하고 관리하지 않는다. 세션정보나 쿠키정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만을 단순히 처리하면 된다.
  - 이 때문에 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해진다.

- 
--- 

[참고] : https://meetup.toast.com/posts/92