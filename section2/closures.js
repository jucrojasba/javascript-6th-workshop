function crearSumador(value){
    let userNumber = parseFloat(value);
    function innerfunction(secondValue) {
        userNumber += secondValue;
        return userNumber;
    }
    return innerfunction;
}
const sumarCinco = crearSumador(5);
console.log(sumarCinco(3));