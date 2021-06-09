// Fizz Buzz - 100 numeros
// Multiplos de 3 [3 6 9 12 ...] Fizz
// Multiplos de 5 [5 10 15 20 ...] Buzz
// Mulriplos de 3 y 5 [15 30 45 ...] FIZZBUZZ!

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ!`);
    }
    else if (i % 3 === 0){
        console.log(`${i} Fizz`);
    }
    else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    }
}