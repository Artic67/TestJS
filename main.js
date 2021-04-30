class Parser {
    getNameById(id, data) {
        for (const el in data) {
            let spl = data[el].split(";");
            spl.pop();
            console.log(spl);
            if (spl[3] == id) return spl[0];
        }
        return undefined
    }

}

let a = Parser.prototype;
console.log(a.getNameById("19126", ["Artem;18;human;91286;",
"Andrey;16;human;19126;",
"Mark;23;human;03632;",
"Lily;21;human;52372;"]));
