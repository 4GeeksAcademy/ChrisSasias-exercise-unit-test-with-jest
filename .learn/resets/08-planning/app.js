// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

let amount = parseInt(prompt("ingresa tu dinero:"));
let currentCurrency = prompt("ingresa la moneda:")

let currencyToTransform = prompt("ingrese conversion de moneda:"("JPY","USD","GBP")).toUpperCase();

let currencyValue = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function converterCurrency (amount, currentCurrency, currentValue, currencyToTransform){

        switch(currentValue){
            case  currentCurrency === "JPY": currencyToTransform === "USD" ? JPYToUSD(): JPYToGBP()
                break
            case currentCurrency === "USD": currencyToTransform === "JPY" ? USDToJPY(): USDToGBP()
                break
            case currentCurrency === "GBP": currencyToTransform === "JPY" ? GBPToJPY(): GBPToUSD()
                break
            default:  return "tu valor es otro, vuelve a intentarlo";
                break
        }
        let dollarToEuro = function(dollarValue){
                return dollarValue * 0.89;
                console.log(dollarValue);
            }
            
            // Yen a Euros
            let euroToYen = function(euroValue){
                return euroValue * 124.15;
            }


            //***** YOUR CODE BELOW ↓ ******///
            
            console.log(euroToYen(dollarToEuro(137)));


}

let result = converterCurrency ();
console.log(result);