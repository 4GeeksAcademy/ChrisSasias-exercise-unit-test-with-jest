// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// EUR (Euro) = 1.2 USD (US Dollar)

function fromDollarToYen(dolar){
return (dolar/1.2)*(127.9)
}

function fromEuroToDollar(euro){
return euro*1.2
}

function fromYenToPound(yen){
return (yen/127.9)*0.8
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound}