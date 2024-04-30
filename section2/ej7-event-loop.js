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
}
menu();
