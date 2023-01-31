console.log ('works');

const firstName = prompt('Inserisci il tuo nome!');
console.log (firstName);


// chiedere età del passeggero
const eta = parseInt(prompt('Inserisci la tua età!'));
console.log (eta);

// chiedere all'utente quanti chilometri vuole percorrere

let km = parseFloat(prompt('Inserisci quanti kilometri vuoi percorrere!'));
console.log (km)

// calcolare il prezzo totale del viaggio

let total = parseFloat( 0.21 * km)
console.log (total)

// calcolare il 20% di sconto se minore di 18 anni
// calcolare il 40% di sconto se over 65 anni


let discountSmall = parseInt(20)
let discountOver = parseInt(40)
let totalDiscount
let finalPrice

if ( eta < 18 ) {
    totalDiscount = parseFloat((total / 100) * discountSmall);

    finalPrice = (total - totalDiscount)
    
    if ( eta > 65 ) {
        totalDiscount = parseFloat((total / 100) * discountOver);
    
        finalPrice = (total - totalDiscount)
    }
}

// else ( eta >= 18 && eta <= 65 ) 

//     finalPrice = parseFloat(total)
// }





    
console.log (totalDiscount)
console.log ('il totale da pagare è', finalPrice)



// let rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
// console.log(rounded);