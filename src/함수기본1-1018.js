// 함수선언문 : function 키워드로 생성, 호이스팅에 영향 받음. 호출해야 실행 됨
// !!함수형 프로그램에서 제일 조심해야 할 부분!! 전역변수 사용 해도되나, 결과값에 영향을 주면 안되는데 영향을 줌.
/*let test = 10000;
console.log(sum(10, 20));
console.log(sum(100, 200));*/

/*function sum(p1, p2) {
    return test + p1 + p2;
}*/
//함수표현식 : 변수에 함수를 할당해서 사용하는 방식. 호이스팅은 적용되지 않음. 네이밍 함수와 익명의 함수로 만들 수 있음
// const gugudan = function(dan) {
//     for(let i = 1; i < 10; i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }    
// }


//화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법. '=>' . 함수 선언식보다 간결하고 가독성이 좋아 많이 사용 됨.
/*const gugudan = (dan) => {
    for(let i = 1; i < 10; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }    
}*/

/*gugudan(5);
gugudan(9);*/ //변수에 대입받기 때문에 위로가면 호이스팅이 안됨.

//익명의 함수를 전달받는 변수 sum
/* const sum = (num1, num2 = 100) => {
    console.log(num1, num2);
    return num1 + num2;
} */
//자바스크립트에서는 매개변수의 수 만큼 인수를 전달하지 않아도 오류 발생하지 않음
/*console.log(sum(10));*/

//자바스크립트 = 1급 고차함수. 함수의 매개변수로 함수를 넣을 수 있음. 
/*const sum = (num1, num2 = 100) => num1 + num2;
console.log(sum(10));*/

//스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위

//전역 스코프
/*let a = 10;
function sum(){
    console.log(`함수 내부 : ${a}`);
}
sum();
console.log(`함수 외부 : ${a}`);*/

//지역 스코프이자 블록 스코프
/*function sum(){
    let a = 10; //자바에서는 오류남. 중괄호 안에서만 동작하기 때문에.
    //let을 대신해서 var을 쓰게 되면, 괄호 범위 안에서만 끌어올림(호이스팅) 함.
    console.log(`함수 내부 : ${a}`);
}*/
//sum();
//console.log(`함수 외부 : ${a}`); // a가 블럭스코프 안에서 실행되고 끝남

// var a = 10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 내부 a : ${a}`);
// console.log(`코드 블록 내부 b : ${b}`);

//참조 우선순위
/*let a = 10;
const b = 20;
function sum() { // 내부 지역변수가 먼저 사용되고, 없으면 전역변수 사용함.
    let a = 50;
    const b = 70;
    console.log(`함수내부 a : ${a}`);
    console.log(`함수내부 b : ${b}`);
}
sum();*/

/*
let a = 10;
let b = 20;
{
    let a = 30;
    let b = 40;
    console.log(`함수내부 a : ${a}`);
    console.log(`함수내부 b : ${b}`); // 지역에 같은 변수가 있으면, 지역 내의 함수가 우선순위
}
*/

//즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수
(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행 합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";

    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
}

