function menu() {
  const validateAnswer = /^(\b[1-5]\b,){4}(\b[1-5]\b)$/;
  let userSort = ``;
  do {
    userSort =
      prompt(`Dado el siguiente còdigo:\n\n\n1. console.log("Inicio del script");\n\n2. setTimeout(() => {
      console.log("Primer setTimeout");
    }, 0);\n\n3. setTimeout(() => {
      console.log("Segundo setTimeout");
    }, 0);\n\n4. Promise.resolve("Promesa resuelta").then(console.log);\n\n5. console.log("Fin del script");\n\n\nPorfavor ingresa el orden en el que se mostraran los mensajes de consola: (escribe el orden separado por comas ej: 1,4,3,2,5)`);
  } while (!validateAnswer.test(userSort));
  userSort = userSort.split(",");
  if(userSort[0]=='1'){
    alert(`Felicitaciones! console.log("Inicio del script"); es el primer resultado por consola en mostrarse.\n\n\nExplicaciòn: es una actividad sincròna y es la primera linea de còdigo leida`)
  }else{
    alert(`Tu respuesta es incorrecta! console.log("Inicio del script"); es el primer resultado por consola en mostrarse.\n\n\nExplicaciòn: es una actividad sincròna y es la primera linea de còdigo leida`)
  }
  if(userSort[1]=='5'){
    alert(`Felicitaciones! console.log("Fin del script"); es el segundo resultado por consola en mostrarse.\n\n\nExplicaciòn: es la siguiente actividad sincròna en el còdigo`)
  }else{
    alert(`Tu respuesta es incorrecta! console.log("Fin del script"); es el segundo resultado por consola en mostrarse.\n\n\nExplicaciòn: es la siguiente actividad sincròna en el còdigo`)
  }
  if(userSort[2]=='4'){
    alert(`Felicitaciones! Promise.resolve("Promesa resuelta").then(console.log); es el tercer resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas, Javascript ejecuta la primera microtarea leida en el còdigo`)
  }else{
    alert(`Tu respuesta es incorrecta! Promise.resolve("Promesa resuelta").then(console.log); es el tercer resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas, Javascript ejecuta la primera microtarea leida en el còdigo`)
  }
  if(userSort[3]=='2'){
    alert(`Felicitaciones! \n\nsetTimeout(() => {
  console.log("Primer setTimeout");
}, 0); \n\nEs el cuarto resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas y las microtareas, Javascript ejecuta la primera macrotarea leida en el còdigo`)
  }else{
    alert(`Tu respuesta es incorrecta! \n\nsetTimeout(() => {
  console.log("Primer setTimeout");
}, 0); \n\nEs el cuarto resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas y las microtareas, Javascript ejecuta la primera macrotarea leida en el còdigo`)
  }
  if(userSort[4]=='3'){
    alert(`Felicitaciones! \n\nsetTimeout(() => {
  console.log("Segundo setTimeout");
}, 0); \n\nEs el quinto resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas, las microtareas y la primer macrotarea, Javascript ejecuta la segunda macrotarea leida en el còdigo`)
  }else{
    alert(`Tu respuesta es incorrecta! \n\nsetTimeout(() => {
  console.log("Segundo setTimeout");
}, 0); \n\nEs el quinto resultado por consola en mostrarse.\n\n\nExplicaciòn: despues de terminar con las actividades sincrònas, las microtareas y la primer macrotarea, Javascript ejecuta la segunda macrotarea leida en el còdigo`)
  }
}
menu();
