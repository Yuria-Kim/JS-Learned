// queryselector
console.log(document.querySelector('h1'));
console.log(document.querySelector('p'));
console.log(document.querySelector('#text'));
console.log(document.querySelector('.paragraph'));

// getElement
console.log(document.getElementById('text'));

// 위 명령어로 골라낸 엘리먼트 변경 가능!
const p = document.getElementById('text');
p.textContent = '겟엘리먼트바이아이디!!'
console.log(p.textContent);
// 가장 아래 라인에서 변경했지만, 해당 라인 위쪽의 모든 내용도 동시 변경
// textContent = 노드가 포함하고 있는 텍스트 콘텐츠를 표현