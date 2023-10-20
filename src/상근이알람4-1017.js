// let tmp, hour, min, calc;
// tmp = prompt("시간 입력 : ", "");
// hour = Number(tmp);
// tmp = prompt("분 입력 : ", "");
// min = Number(tmp);
// calc = (hour * 60) + min;
// console.log(calc);
// if(calc < 45) {
//     calc = (24 * 60) + min;
// }
// calc -= 45;
// console.log(calc);
// hour = parseInt(calc / 60);
// min = calc % 60;
// document.write("<h2>" + `${hour}시 ${min}분 ` + "</h2>");

//시간 정보(시간과 분)을 입력받아 45분 일찍 설정하는 문제.
//시간과 구문을 템플릿 문자열을 사용해 출력하기 `${}`
// parseInt() : 결과값이 소수점 이하로 떨어질 때 정수로 반환
// 1. prompt를 사용해 시간, 분, 입력받기
// 2. 입력받은 시간을 분으로 환산하고 -45빼기
// 3. 만약 -45가 전날이면 24시간만큼 더해줘야함.((60*24)-45)
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력시 템플릿 문자열 사용
let input, hour, min, calc;
input = prompt("시 : ", "");
hour = Number(input);
input = prompt("분 : ", "");
min = Number(input);
calc = (hour * 60) + min;
if(calc<45){
    calc = (60*24) + min;
}
calc -= 45;
hour = parseInt(calc / 60);
min = calc % 60;
document.write(` ${hour}, ${min}으로 알람이 설정되었습니다.`);