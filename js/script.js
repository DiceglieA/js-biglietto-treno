const priceKm = '0.21'
let km = parseInt(prompt('quanti chilometri dovrai percorrere?'))
//console.log('km')
let age = parseInt(prompt('quanti anni hai?'))
//console.log('age')
let price = km * priceKm;
//console.log('price')

if (age <= 18) {
    price = price * 0.8
}
else if (age >= 65) {
    price = price * 0.6
}
else {
    cost = price
}

document.getElementById('cost').innerHTML = `Il prezzo del biglietto è: ${price.toFixed(2)}`