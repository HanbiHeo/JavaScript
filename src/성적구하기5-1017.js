/* 1. 성적 입력받아 학점 출력하기
- 0 ~ 100점 사이가 아니면 입력 오류 출력
- 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 C처리 */
let A, B, C, D, score;
while(true) {
    score = Number(prompt("점수 : ", ""));
    if (score <= 0 || score >= 100) alert("다시입력하시오.")
    else break;
}
if(score >= 90) {alert("A")}
    else if(score > 90 || score >= 80) {alert("B")}
    else if(score > 80 || score >= 70) {alert("C")}
    else if(score > 70 || score >= 60) {alert("D")}
    else {alert("F")}
    