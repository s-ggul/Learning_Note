## Yaml파일이란
-----

- `Xml`, `Json`, `yaml` 등 파일 포맷이 있다.
  
  <br />

- 이러한 파일들을 사용하는 이유는 타 시스템 간에 데이터를 주고 받을 때 데이터 포맷에 대한 약속이 필요하기 때문이다. 
- 혼자 시스템을 개발하거나 내부 시스템끼리는 단순한 문자열을 만들어서 파싱해 규칙을 세울 수 있을것이다. 
- 그럼 데이터를 내부 시스템에 전송할때 포맷에 대한 형태는 말로써 혹은 내부 문서로써 정의해 놓으면 되기 때문에 데이터 크기는 엄청 작아질 수 있다.

<br />

- 하지만 문제는 `타 시스템들과의 연동`을 할때 발생한다.

<br />

- 내부에서 세운 규칙을 타 시스템들과 데이터를 주고 받을때마다 문서로 주고 받기도 번거롭고, 데이터 규칙에 대한 문서들이 많아지게 되는 문제가 있다. 
- 그래서 `Xml`, `Yaml`, `Json` 과 같은 데이터 포맷을 정의하고 그 포맷에는 규칙도 있다.

<br />

- 흐름에 따른 변천사는 

```yaml    
    1. Xml
    2. Json
    3. yaml
```

위와 같은 순서이며 가독성이 좋은 순서로 발전한다. => `Yaml` 형태가 가장 가독성이 좋다.

<br />
#### Xml File

```xml
Xml File

<?xml version "1.0" encoding="utf-8" ?>
<root>
    <apiVersion>v1</apiVersion>
    <kind>...</kind>
    <metadata>
        <name>hello-world</name>
        <labels>
            <app>hello</app>
        </labels>
    </metadata> <!--Object-->
    <spec> 
        <containers><!--Array-->
            <name>test-xml</name>
            <image>test/hello</image>
            <ports>
                <containerPort>8000</containerPort>
                <!--<Key> Value </Key>-->
            </ports>
        </containers>
    </spec>
</root>
```

- 태그형식을 통해 `Key`, `Value` 를 구분하고, 태그안에 태그를 넣어 부모와 자식관계의 구조를 나타낸다. 
  
<br />


#### Json File
```Json
Json File

{
    "apiVersion" : "v1",
    "kind" : "...",
    "metadata" : {
        "name" : "hello-world",
        "labels" : {
            "app" : "hello"
        } 
    },  //Object
    "spec" : {
        "containers" : [ //Array
            {
                "name" : "test-json",
                "image" : "test/hello",
                "ports" : [
                    {
                        "containerPort":8000
                        //Key : Value
                    }
                ]
            }
        ]
    }

}
```
- `Object` 인경우 `{}` 로 감싸주고, `Array`일 경우 `[]`로 감싸준다. 
- `Key` 도 `Xml`처럼 두번 들어가지 않는다. 

<br />

#### Yaml File

```yaml
Yaml File

apiVersion : v1
kind : ...
metadata : 
    name : hello-world
    labels : 
        app : hello # Object
spec :  
    containers : 
        - name : test-yaml  # Array
          image : test/hello
          ports:
            - containerPort : 8000
            #   Key : Value
```

- `-`(하이픈)을 통해서 `Array` 임을 알 수 있다.
- 일반적으로 `Yaml File` 형식을 권장한다.