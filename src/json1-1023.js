//배열속 객체 리터럴
const memberInfo = [
    {
        name:"이영지",
        age:22,
        job:"래퍼",
        addr:"서울시 강남구 청담동"
    },
    {
        name:"미미",
        age:25,
        job:"오마이걸",
        addr:"서울시 강남구 역삼동"
    },
    {
        name:"안유진",
        age:21,
        job:"아이브",
        addr:"서울시 강북구"
    },
];

//json버전, 자바스크립트 객첼ㄹ JSON문자열로 변환
const json = JSON.stringify(memberInfo);
console.log(json);

//JSON문자열을 자바스크립트 객체로 변환
const jsObject = JSON.parse(json);
console.log(jsObject);

