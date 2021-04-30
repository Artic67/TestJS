class Parser {
    per() {
        return 3;
    }
}

let a = Parser.prototype;
console.log(a.per());
