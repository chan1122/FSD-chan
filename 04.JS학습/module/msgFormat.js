// 구체적인 데이터 구성 처리를 위한 JS -> msgFormat.js

// 내용 메시지 구성함수

const message =(name,age) =>
`나의 이름은 ${name}입니다. 나이는 ${age}살입니다 반가워용!! 여러분!~!`;

// 단일 한 함수 내보내기
export {message};
// 만약 import에서 별칭을 쓰고 싶다묜 default로 내보낼수 없다!
// default빼고 중괄호{} 로 묶어서 내보내야함!!!
