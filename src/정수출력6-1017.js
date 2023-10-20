// n개 정수 입력받아 n*n 출력
// css 적용해서 출력
// 3
// 1 2 3
// 4 5 6
// 7 8 9
let n = Number(prompt("정수 입력 : "))
for(let i = 1; i <= n*n; i++){
    document.write("<span class=nbyn>" + i + "</span>")
    if(i % n == 0) {document.write("<br>")};
}
