// 정규표현식을 사용하여 문자열을 검색, 대체, 추출 등을 수행. 패턴 매칭
// exec() : 패턴과 일치하는 문자열을 반환. 없으면 null
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.exec(targetStr);
// // console.log(result1);
// const result2 = pattern.exec(targetStr)
// console.log(result2);

//test() : 문자열에 특정 패턴과 일치하는 문자열이 있는지 검색. 있으면 true 없으면 false.
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.test(targetStr);
// console.log(result1);
// const result2 = pattern.test(targetStr)
// console.log(result2);

// let phoneNumber = "안녕하세요. 010-5000-0000 입니다.";
// //g는 여러개를 찾는다는 뜻
// const regex = /^\d{3}-\d{3,4}-\d{4}$/g;
// let rst1 = regex.test(phoneNumber);
// console.log(rst1);
// let rst2 = regex.test(phoneNumber);
// console.log(rst2);
// let rst3 = regex.test(phoneNumber);
// console.log(rst3);

//마지막 전화번호 4글자 이상이어도 true가 뜨는 오류 잡아내기.
let phoneNumber = "010-5000-0000";
const regex = /^\d{3}-\d{3,4}-\d{4}$/;
let rst1 = regex.test(phoneNumber);
console.log(rst1);

