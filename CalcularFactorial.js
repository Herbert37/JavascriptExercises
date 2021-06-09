// Herbert Ayala
const getfactorial = (number) => {
    let counter = 2;
    let factorial = 1;
    while(counter <= number){
        factorial *= counter;
        counter++;
    }
    return `El factorial de ${ number } es ${factorial}`;
}
console.log( getfactorial(/*Número*/3) );