function sequenciaFibonnacci(number) {
    let fibonnacci = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibonnacci[i] = fibonnacci[i - 1] + fibonnacci[i - 2];
    }
    return fibonnacci;
}

function isfibonnaccionacci(number) {
    let fibonnacciSequence = sequenciaFibonnacci(number);
    return fibonnacciSequence.includes(number);
}

let inputNumber = parseInt(prompt("Digite um número para verificar se pertence à sequência de fibonnacci:"));
if (isfibonnaccionacci(inputNumber)) {
    console.log(inputNumber + " pertence à sequência de fibonnacci.");
} else {
    console.log(inputNumber + " não pertence à sequência de fibonnacci.");
}