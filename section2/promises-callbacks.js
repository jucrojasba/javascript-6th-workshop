function manejarAsincronia(callback, promise) {
  promise
    .then((message) => {
      console.log(message, callback(message, null));
      alert(`${message} y ${callback(message, null)}`);
    })
    .catch((message) => {
      console.log(message, callback(null, message));
      alert(`${message} y ${callback(null, message)}`);
    });
}
const promise = new Promise((resolve, reject) => {
  let flag = true;
  while (flag) {
    const decision = prompt(
      "¿Te cumplieron lo que te prometieron? Escribe: si o no"
    );
    switch (decision.trim().toLowerCase()) {
      case "si":
        setTimeout(() => {
          resolve("Promesa cumplida");
        }, 2000);
        flag = false;
        break;
      case "no":
        setTimeout(() => {
          reject("Promesa incumplida");
        }, 2000);
        flag = false;
        break;
      default:
        alert(`Opciòn Invàlida, porfavor escribe si o no`);
        break;
    }
  }
});
function callback(si, no) {
  if (si) {
    return `callback ejecutado`;
  } else if (no) {
    return `callback no ejecutado`;
  } else {
    return `Error!`;
  }
}
manejarAsincronia(callback, promise);
/*
-¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo? 
Se demoraria mas o menos segun sea el caso en ejecutar el callback().
-¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
La promesa devuleve un mensaje a la funciòn manejarAsincronia message = 'Promesa incumplida'
y el catch ejecuta el callback con este mensaje.
El callback entiende el message y devuelve: callback no ejecutado
*/
