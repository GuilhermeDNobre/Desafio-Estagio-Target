function inverterString(str) {
    let stringInvertida = ''
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]
    }
    return stringInvertida
}

let minhaString = "Olá, Target!"
let stringInvertida = inverterString(minhaString)
console.log(stringInvertida) // Saída: "!tegraT ,álO"
