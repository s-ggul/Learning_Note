let age = 10; // 기존 js

// TS

type Centimeter = number;
// Centimeter라는 타입을 정의할 수 있다.
// 이렇게 단위를 타입으로 지정하면 단위로도 읽히기때문에 풍성하게 표현할 수 있다.

let weight:number = 80;
let height:Centimeter = 176;

type RainbowColor = 'red'|'orange'|'yellow'; //...
let color:RainbowColor = 'orange';

// color = 'black' => 에러발생 => 정의된 타입에 포함되지 않으므로

/*
 프론트엔드 앱의 규모가 커지면 커질수록 데이터의 수는 많아지고 이러한
 데이터 타입을 정의함으로써 오랜 시간 유지보수 및 개발 측면에서 다수의 
 이점이 있기 때문에 대부분의 회사들에서 주언어로 채택하고 있는 추세이다.
*/



