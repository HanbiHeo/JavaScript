let isRed = false;
        // 쿼리 셀랙트 document -> dome ; 해당하는 도큐먼트를 찾아서
        const head = document.querySelector("#head-line");
        // 이벤트를 넣어준다. -> 리엑트에서 쓸 문법들,,
        head.onclick = function() {
            if(!isRed) {
                head.style.color = "red";
                // system.print 와 비슷한 역할 = console.log(!!디버깅, 로그 확인용!!)
                console.log("현재 컬러는 레드 입니다")
            } else {
                head.style.color = "blue";
                console.log("현재 컬러는 블루 입니다")
            }
            isRed = !isRed;
        }