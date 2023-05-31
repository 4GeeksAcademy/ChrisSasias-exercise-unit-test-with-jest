test("213 yen should be 1.23 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(213)).toBe(1.3322908522283035); 
})
test("67 dolars to be 9367yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(67)).toBe(7141.083333333334); 
})
    // Importar las funciones desde app.js
const { fromYenToPound, fromDollarToYen } = require('./app.js');
