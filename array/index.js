// 배열의 선언
const numbers = [1,2,3,4];
// const numbers = new Array([1,2,3,4]);


// 배열의 조회
// const number = numbers[0];
// console.log(number);

// 배열의 순회
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("===============")

for (const number of numbers) {
    console.log(number);
}

console.log("===============")

for (const numbersKey in numbers) {
    console.log(numbers[numbersKey]);
}

// 배열의 메서드
numbers.push() // 배열의 맨뒤에 삽입
numbers.pop() // 배열의 맨뒤를 삭제
numbers.shift() // 배열의 맨앞을 삭제
numbers.unshift() // 배열의 맨앞에 추가