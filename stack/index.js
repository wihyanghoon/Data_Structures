class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items.toString());
    }
}

// 10진수 2진수 변환
function translateNumber (number) {
    const stack = new Stack();
    let rest = 0;
    let result = "";
    // 인자로 받은 숫자가 0이 될때 까지 반복
    while (number > 0) {
        rest = Math.floor(number % 2);
        stack.push(rest);
        number = Math.floor(number / 2);
    }

    while (!stack.isEmpty()) {
        result += stack.pop().toString();
    }

    return result;
}

console.log("=====",translateNumber(2))