## Flutter 3rd Study

---

<br />

- `StatefulWidgetstateful` 을 이용해 상태를 가지는 위젯을 만들 수 있다.

```dart

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp2());
}

class MyApp2 extends StatefulWidget {
  const MyApp2({Key? key}) : super(key: key);

  @override
  State<MyApp2> createState() => _MyApp2State();
}

class _MyApp2State extends State<MyApp2> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool _isChecked = false;
  int _count = 41; // 기본적으로  private

  @override
  Widget build(BuildContext context) {
    var titleSection = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text("여기가 어디고!??",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 23)),
            Text(
              "아 ㅋㅋㅋ 어딘데 장소를 쓰라고 하누...",
              style: TextStyle(color: Colors.grey, fontSize: 18),
            ),
          ],
        ),
        Padding(
          padding: EdgeInsets.all(10.0),
        ),
        IconButton(
          onPressed: _pressedStar,
          icon: (_isChecked ? Icon(Icons.star) : Icon(Icons.star_border)),
          color: Colors.deepOrange,
        ),
        Text('$_count')
      ],
    );

    var buttonSection = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Column(
          children: <Widget>[
            Icon(Icons.call, size: 45, color: Colors.lightBlue),
            Text("Call", style: TextStyle(color: Colors.lightBlue)),
          ],
        ),
        Padding(
          padding: EdgeInsets.all(40.0),
        ),
        Column(
          children: <Widget>[
            Icon(Icons.near_me, size: 45, color: Colors.lightBlue),
            Text("Route", style: TextStyle(color: Colors.lightBlue)),
          ],
        ),
        Padding(
          padding: EdgeInsets.all(40.0),
        ),
        Column(
          children: <Widget>[
            Icon(Icons.share, size: 45, color: Colors.lightBlue),
            Text("Share", style: TextStyle(color: Colors.lightBlue)),
          ],
        )
      ],
    );
    var textSection = Container(
      child: Text(
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!"
        "아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!아 ㅋㅋㅋㅋ 무슨 텍스트를 쓰라고 하노!!!!!",
        style: TextStyle(fontSize: 15),
      ),
      padding: EdgeInsets.all(40.0),
    );
    return Scaffold(
      body: Column(
        children: <Widget>[
          Image.network(
              "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDVfMjEw/MDAxNTgzMzg0NjAzMjY0.0vpMbe7EHFSfN1dJ8-2ryQ6-w3-9cP28q26--pQ0ekYg.S_WRY6DHr9f1BhAPThadogspUTRBEXhYNJc5cKwVYvgg.PNG.tonada/2020-03-05_13;48;29.PNG?type=w800",
              height: 240,
              width: 600,
              fit: BoxFit.cover),
          Padding(
            padding: EdgeInsets.all(15.0),
          ),
          titleSection,
          Padding(
            padding: EdgeInsets.all(15.0),
          ),
          buttonSection,
          textSection,
        ],
      ),
    );
  }

  void _pressedStar() {
    setState(() {
      if (_isChecked) {
        _isChecked = false;
        _count -= 1;
      } else {
        _isChecked = true;
        _count += 1;
      }
    });
  }
}


```
