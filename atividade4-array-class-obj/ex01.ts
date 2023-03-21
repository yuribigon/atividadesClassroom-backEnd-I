const numeros : number[] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]
const pares : number[] = [];

numeros.filter((n) => {
    if(n % 2 === 0){
        pares.push(n);
    }
});

console.log(pares);
