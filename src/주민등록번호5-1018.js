let jumin;
while(true){
    jumin = prompt("주민번호 : ", "");
    if(jumin.length !=14) alert("입력오류");
    else{
        if(jumin.indexOf("-") == -1) alert("하이픈(-)누락")
        else break;
    }
}
let gender = jumin.charAt(7);
let genderStr;
if (gender == "1" || gender == "3") genderStr = "남";
else genderStr = "여";

let birthYear = jumin.substring(0,2);
if(gender == "1" || gender == "2") {
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear;
birthYear = Number(birthYear);

const date = new Date();
const preYear = date.getFullYear();
let age = preYear - birthYear;

document.write("<div class = box> 성별 : " + genderStr + ", 나이 : " + age + "</div>")