//Fetch API는 Promise방식으로 구현
//id가 1인 데이터 조회
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((json) => console.log(json))
.catch(error => console.error(error));

//POST - 데이터 생성
fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST", //HTTP 요청 방법
body: JSON.stringify({
  //전송할 데이터
  title: "foo",
  body: "bar",
  userId: 1,
}),
headers: {
  //헤더 값 정의
  "content-type": "application/json; charset=UTF-8",  //content-type 정의
},
})
.then((response) => response.json())
.then((json) => console.log(json));

//PUT - 데이터 수정
fetch("https://jsonplaceholder.typicode.com/posts/1", {
method: "PUT",
body: JSON.stringify({
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
}),
headers: {
  "Content-type": "application/json; charset=UTF-8",
},
})
.then((response) => response.json())
.then((json) => console.log(json));

//DELETE - 데이터 삭제
fetch("https://jsonplaceholder.typicode.com/posts/1", {
method: "DELETE",
});