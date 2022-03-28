## Flutter Start

---

<br />

```dart
import "package:flutter/material.dart";

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      title : "Flutter Demo",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(title: '드가자~~~'),
    );
  }
}

class MyHomePage extends StatefulWidget {

  MyHomePage({Key? key, required this.title}) : super(key : key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title),), //widget이 해당 객체를 가르킴 => this 와 비슷한건가??
      body : Center(
        child : Column(mainAxisAlignment: MainAxisAlignment.center,// 화면상에 여러가지를 배치할 수 있음 + 가운데 정렬
        children : <Widget>[ // child 내에서 정렬될 아이템들
          Text("버튼 많이 눌러눌러"), //폰트도 설정할 수 있음
          Text('$_counter', style : Theme.of(context).textTheme.display1),
          // 이런식으로 스타일을 넣을 수 도 있음
        ]
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: "Increment",
        child : Icon(Icons.add)
      ),
    );
  }

  void _incrementCounter() {
    setState((){
      _counter++;
    });
    //StateLess위젯과 StateFull 위젯을 이해하고 setState()를 이해해야함.
    // StateLess => 변경 불가
    // StateFull => 변경 가능
    // setState() 를 통해 변경사항을 적용해준다.
  }
}
```

<br />

-초기 `package:flutter/material.dart` 를 `Import` 한다.

<br />

```dart
void Main() => runApp(MyApp());
```

- `MyApp` 인스턴스를 생성하여 프로그램을 `실행`

<br />

- `Flutter`에는 `Stateful` 위젯과 `Stateless` 위젯이 있다.
- `Stateful` => 화면상에서 내용 변경이 가능
- `Stateless` => 화면상에서 내용 변경 불가능
- `Stateful`의 경우 `setState()`를 사용해 상태를 변경해준다.

<br />

#### 내용 들여다보기

```dart
Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title),), //widget이 해당 객체를 가르킴 => this 와 비슷한건가??
      body : Center(
        child : Column(mainAxisAlignment: MainAxisAlignment.center,// 화면상에 여러가지를 배치할 수 있음 + 가운데 정렬
        children : <Widget>[ // child 내에서 정렬될 아이템들
          Text("버튼 많이 눌러눌러"), //폰트도 설정할 수 있음
          Text('$_counter', style : Theme.of(context).textTheme.display1),
          // 이런식으로 스타일을 넣을 수 도 있음
        ]
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: "Increment",
        child : Icon(Icons.add)
      ),
    );
```

<br />

- `appBar` => 애플리케이션의 상단바를 생성
- `column` => 이름은 `column`이지만 화면상에 하나의 `column` 방향으로 스택처럼 여러가지 내용물을 정리하고 쌓아준다. 정렬도 가능하다.
  - 이를 통해 아이템 배치를 구현할 수 있음.
- `children` => `child`내에서 사용될 아이템들을 선언할 수 있다.

<br />

##### child내에서 사용될 아이템들 children으로 정의하기

```dart
child : Column(mainAxisAlignment: MainAxisAlignment.center,
            // 화면상에 여러가지를 배치할 수 있음 + 가운데 정렬
        children : <Widget>[ // child 내에서 정렬될 아이템들
          Text("버튼 많이 눌러눌러"), //폰트도 설정할 수 있음
          Text('$_counter', style : Theme.of(context).textTheme.display1),
          // 이런식으로 스타일을 넣을 수 도 있음
```

- `child`에서 `column`을 이용해 틀을 잡고 `children`에서 `Text()`를 통해 텍스트들을 정렬해준다. 이때 `Text()` 내부에 텍스트별 스타일을 지정할 수도 있다.

<!--여기까지가 6번째 강의까지의 내용-->
