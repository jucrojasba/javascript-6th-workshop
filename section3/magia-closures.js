function closure(){
    let contador = 0;
    function innerContador(value){
        contador+=value;
        return contador;
    }
    return innerContador;
}
function validateNumber(value){
    const validateNumber = /^\d+$/;
    if(validateNumber.test(value)){
        return true
    }else{
        alert(`Opciòn invàlida, porfavor ingresa un numero`)
        return false;
    }
}
function menu(){
    let flag =true, userNumber,desicion, contarUser = closure();
    while(flag){
    desicion = prompt(`Elige una opciòn: \n1.Sumar un numero al contador. \n\n2. Salir\n\nEscribe 1 o 2`);
    switch (desicion) {
        case '1':
            do {
                userNumber = prompt('Ingresa un numero')
                userNumber = parseFloat(userNumber.trim().toLowerCase());
            } while (!validateNumber(userNumber));
            alert(`Al sumar el numero ${userNumber} al contador, el contador quedò en: ${contarUser(userNumber)}`)
            break;
        case '2':
            alert(`Hasta pronto!`);
            flag = false;
            break;    
        default:
            alert(`Opciòn invàlida`)
            break;
    }
    }
}
menu();
