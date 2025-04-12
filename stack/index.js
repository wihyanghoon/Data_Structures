function Stack () {
    let items = [];

    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items[length - 1]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.size = function () {
        return items.length
    }

    this.clear = function () {
        items = [];
    }

    this.print = function () {
        console.log(items.toString())
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