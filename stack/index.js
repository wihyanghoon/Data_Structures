function Stack () {
    let items = [];

    this.push = function (element) {
        items.push(element);
    }

    this.pop = function (element) {
        items.pop(element);
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

var stack = new Stack();
stack.push(1)
stack.push(2)

console.log(stack.peek())