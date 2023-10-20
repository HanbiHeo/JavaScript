// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)
// CSS 적용
// let menu = [];
// menu[0] = Number(prompt("버거1 : ", ""));
// menu[1] = Number(prompt("버거2 : ", ""));
// menu[2] = Number(prompt("버거3 : ", ""));
// menu[3] = Number(prompt("콜라 : ", ""));
// menu[4] = Number(prompt("사이다 : ", ""));
// let minB = menu[0];
// let minD = menu[3];
// for (let i = 0; i < menu.length; i++) {
//     if(i < 3 && minB > menu[i]) minB = menu[i];
//     if(i > 2 && minD > menu[i]) minD = menu[i];
// };
// document.getElementById("value").innerHTML = (minD + minB - 50) + "원";
function getPrice(){
    let menu = [];
    for(let i = 0; i < 5; i++){
        menu[i] = Number(document.getElementById("menu" + (i+1)).value)
    }
    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++) {
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minB + minD - 50) + "원";
}