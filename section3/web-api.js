const promise = new Promise((resolve, reject) => {
    let userSeconds = prompt(`Ingresa el tiempo en segundos que deseas esperar para que la promesa sea resuelta:`);
    if(validateNumber(userSeconds.trim())){
        userSeconds = parseFloat(userSeconds.trim());
        setTimeout(() => {
            resolve(`La promesa ha sido resuelta en ${userSeconds} segundo(s)`)
        }, userSeconds*1000); 
    }else{
        reject(`El valor ingresado no es un número. La promesa no ha sido resuelta`)
    }
})
function validateNumber(value){
    const validateNumber = /^\d+$/;
    return validateNumber.test(value);
}
promise.then((message)=>{
    console.log(message)
    alert(message);
}).catch((message)=>{
    console.error(message);
    alert(message);
})
const url = `https://jsonplaceholder.typicode.com/posts`
fetch(url).then(response => response.json()).then(data => console.log(data)).catch(()=> console.error(`Error cargando los datos`));
