const currentYear = 2023; //상수
let birthYear; //변수
let age; //변수

birthYear = prompt("태어난 연도를 입력 하세요(YYYY) : ", "");
age = currentYear - birthYear;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "살 입니다.");