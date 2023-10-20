// 자바스크립트 한줄주석
/* 여러줄 
주석 */
// 변수와 상수 : var, let, const
// var : es6 이전에 사용하던 변수 생성 문법 (호이스팅 특징을 가지고 있음), 중복 선언 가능, 재할당 가능
// let : 변수 선언 문법, !!자바 변수 형태와 동일!!, 중복선언 불가, 재할당 가능, es6에서 추가
// const : 상수 선언, 재할당 불가, es6에서 추가

// var(잘 쓰지 않음) : 호이스팅 - 면접에 자주 나오는 부분,
// var a = 100;
// var a = 200;

// let : (자바와 비슷)
// console.log(a);
// let a = 100;

// const: 상수
// const a = 100;
// a = 200;
// console.log(a);

// console.log(sum(10,20));

// 함수 : 끌어올림. sum을 먼저 불렀으나, 함수는 기본적으로 끌어올림(호이스팅)이나 변수는 끌어올림 안함. 그러나 !!var!!은 끌어올림(호이스팅)을 쓰기때문에 되도록 안쓰는게 좋음.
// 때문에 var은 중복선언과 호이스팅으로 인해 오류가 많이 남. 
// 리엑트에서는 const(상수)를 자주 사용 = 불변성의 원칙(1급 함수) ; 값이 변경되면 안됨. ex자바의 향상된 for문은 내부 요소를 못바꾸기 때문에 많이 쓰는것과 같음.
// function sum(x, y) {
//     return x + y;
// }

// 문자열
// let str = "문자열" + '연결연산자 사용 ' + `역시 사용 가능`
// console.log(str);
// let name = "제 이름은 '문장열 속 문자열' \"쌍따옴표\" 입니다"
// console.log(name);
// let name = "문상훈"
// let age = 23;
// let addr = "경기도 양주시";

// 템플릿 문자열 : `` = 백틱을 사용해 만들며, ES6부터 추가됨
// console.log(`이름은 ${name}, 나이는 ${age}, 주소는 ${addr}`);

// 숫자열(Number) : 자바스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급
let num1 = 10.1;
console.log(typeof(num1)); // typeof는 데이터 타입을 확인하는 함수
let sum = 0.1 + 0.2; //부동 소수점은 근사치 계산을 하기 때문에 정확한 정수값이 나오지 않음
console.log(sum); //출력결과 : 0.30000000000000004 -> 실수값은 정확한 값이 떨어지지 않음

//논리형 : 참과 거짓을 구분
let age = 20;
let isAdult = (age > 18) ? true : false;
if(isAdult) console.log("성인임.");
else console.log("성인이 아님.")

//undefined : 변수는 선언 되었지만 아직 값이 정해지지 않았음을 의미(개발자가 대입하는 자료형이 아님)
let empty;
console.log(empty);

//null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘 때 사용 (의도적으로 비워둘 때)
let empty2 = null;
console.log(empty2);

//undefined와 null을 묶으서 특수 자료형이라고도 한다.

//객체(object) : 자바 스크립트의 핵심 자료형 입니다. 기본 자료형을 제외하고 자바스크립트의 대부분의 자료구조는 객체로 이루어져 있음.
//객체 자료형은 = 배열, 객체 리터럴, 함수 등이 있음.
//배열 : 복수의 데이터를 정의할 수 있는 자료형.
/* let score = [80,90,100,88];
console.log(score); */
//자바스크립트의 배열은 자바와 다르게 모든 자료형을 저장할 수 있음
let array = ["아이브, 안유진", 21, true, [100,99,88]]
console.log(array);
let array1 = [];
//객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바스크립트에서 가장 많이 사용되는 문법
//객체 리터럴은 키와 값의 한쌍으로 구성, 중괄호를 이용해서 생성. !! 많이 쓰는 자료구조!! 객체 리터럴 안에 함수, 배열 등이 들어감.
// let score = [80,90,100,88];
let score = {
    kor : 80,
    eng : 90,
    mat :100,
    scn : 87,
};
console.log(score);
console.log(score.kor);
console.log(score['mat']);

const person = {
    name : "이름",
    age : 22,
    addr : "경기도 양주시",
    info : function() {
        return `이름이.. ${this.name} 이름.. 나이는 ..?  ${this.age},  주소 ${this.addr}` //자기참조객체
    }
}

console.log(person.info());

// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환함
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());