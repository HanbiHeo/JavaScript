//콜백(Callback)함수 : 함수 인자로 다른함수 전달하여 그 함수가 실행될 때 호출되는 함수
//콜백함수는 비동기적인 작업을 처리할 때 많이 사용

//함수의 이름 넘기기
function cry() {
    console.log("cry");
}
function sing() {
    console.log("sing");
}
function dance() {
    console.log("dance");
}
//일반함수로 호출 하기
function checkMood(mood) {
    if (mood === "good") sing();
    else cry();
}
// checkMood("sad");

//콜백함수
function checkMoodCallback(mood, goodCall, badCall){
    if(mood === "good") goodCall();
    else badCall();
}
//위에 만들어진 일반 함수를 콜백해서 바꾸기
// checkMoodCallback("good", dance, cry);

//의도적으로 시간 지연시키기 : 타이머 설정과 Callback
function buyTobe(item, price, quantity, Callback){
    console.log(item + "상품을" + quantity + "개 골라서 점원에게 전달함");
    console.log("계산이 필요합니다.");
    setTimeout(function() {
        let total = price * quantity;
        Callback(total);
    }, 2000);
}
function pay(n) {
    console.log("지불할 금액은 : " + n + "입니다.");
}
// buyTobe("맥북에어(스타라이트)", 1300000, 2, pay);

//클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수를 접근할 수 있는 매커니즘 count변수는 makeCounter함수 내에서 정의되지만, 클로저를 통해 counter 함수에서도 접근 가능함. 이러한 메커니즘을 이용하면, 변수를 숨기고 함수를 통해 안전하게 접근할 수 있는 상태를 유지할 수 있음.
function makeCounter() {
    let count = 100;
    return function() {
        count++;
        console.log(count);
    }
}

const counter = makeCounter(); //maekCounter를 호출하여 클로저를 생성하고 반환
counter(); //내부 함수를 호출하여 count를 증가하고 값 출력
counter();
counter();
//변수를 외부에서 전달할 때, 숨겨야하는 경우 씀.