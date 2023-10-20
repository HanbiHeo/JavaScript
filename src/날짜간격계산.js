const dDay = new Date("2024-02-21");
const now = new Date;

let toNow = now.getTime();
let toDay = dDay.getTime();
let remainTime = toDay - toNow;

const calcDay = Math.round(remainTime/(1000*60*60*24));
console.log(calcDay);


document.querySelector('#result').innerHTML = calcDay;