//Ejercicio 1: El quiz del Scope
let score = 0;
function globalVariableQuestion() {
  let flag = true;
  while (flag) {
    let decision = prompt(
      `Dado el siguiente còdigo de JavaScript: \n\n// Global Scope\nvar globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n// Function Scope\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n    // Block Scope\n    let blockVariable = "Soy una variable de bloque.";\n    console.log("Dentro del bloque:", blockVariable);\n  }\n\n  console.log("Dentro de la función:",functionVariable);\n}\n\nconsole.log("Fuera de la función:", globalVariable);\ntestScope(); \n\n\n------ ¿La variable globalVariable puede ser accedida dentro de la funciòn testScope()? ------`
    );
    switch (decision.toLowerCase().trim()) {
      case "si":
        alert(
          `Felicidades!, la variable --globalVariable-- tiene un scope global, es decir puede ser accedida desde cualquier linea de còdigo escrita despuès de su inicializaciòn`
        );
        score += 100 / 3;
        flag = false;
        break;
      case "no":
        alert(
          `Incorrecto!, la variable --globalVariable-- tiene un scope global, es decir puede ser accedida desde cualquier linea de còdigo escrita despuès de su inicializaciòn`
        );
        flag = false;
        break;
      default:
        alert(`Respuesta invàlida, porfavor escribe si o no`);
        break;
    }
  }
}
function localVariableQuestion() {
  let flag = true;
  while (flag) {
    let decision = prompt(
      `Dado el siguiente còdigo de JavaScript: \n\n// Global Scope\nvar globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n// Function Scope\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n    // Block Scope\n    let blockVariable = "Soy una variable de bloque.";\n    console.log("Dentro del bloque:", blockVariable);\n  }\n\n  console.log("Dentro de la función:",functionVariable);\n}\n\nconsole.log("Fuera de la función:", globalVariable);\ntestScope(); \n\n\n------ ¿La variable functionVariable puede ser accedida por fuera de la funciòn testScope()? ------`
    );
    switch (decision.toLowerCase().trim()) {
      case "si":
        alert(
          `Incorrecto!, la variable --functionVariable-- tiene un scope local dentro de la funciòn, es decir puede ser accedida desde cualquier linea de còdigo escrita dentro de la funciòn`
        );
        flag = false;
        break;
      case "no":
        alert(
          `Felicidades!, la variable --functionVariable-- tiene un scope local dentro de la funciòn, es decir puede ser accedida desde cualquier linea de còdigo escrita dentro de la funciòn`
        );
        score += 100 / 3;
        flag = false;
        break;
      default:
        alert(`Respuesta invàlida, porfavor escribe si o no`);
        break;
    }
  }
}
function blockVariableQuestion() {
  let flag = true;
  while (flag) {
    let decision = prompt(
      `Dado el siguiente còdigo de JavaScript: \n\n// Global Scope\nvar globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n// Function Scope\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n    // Block Scope\n    let blockVariable = "Soy una variable de bloque.";\n    console.log("Dentro del bloque:", blockVariable);\n  }\n\n  console.log("Dentro de la función:",functionVariable);\n}\n\nconsole.log("Fuera de la función:", globalVariable);\ntestScope(); \n\n\n------ ¿La variable blockVariable puede ser accedida por fuera del bloque if(true) testScope()? ------`
    );
    switch (decision.toLowerCase().trim()) {
      case "si":
        alert(
          `Incorrecto!, la variable --blockVariable-- tiene un scope local dentro del bloque if(), es decir, solo puede ser accedida desde cualquier linea de còdigo escrita dentro del bloque`
        );
        flag = false;
        break;
      case "no":
        alert(
          `Felicitaciones!, la variable --blockVariable-- tiene un scope local dentro del bloque if(), es decir, solo puede ser accedida desde cualquier linea de còdigo escrita dentro del bloque`
        );
        score += 100 / 3;
        flag = false;
        break;
      default:
        alert(`Respuesta invàlida, porfavor escribe si o no`);
        break;
    }
  }
}
function menu() {
  alert(`Bienvenido al quiz de Scope en JavaScript, presion OK para continuar`);
  globalVariableQuestion();
  localVariableQuestion();
  blockVariableQuestion();
  alert(`Tu score es: ${score.toFixed(2)}%`);
}
menu();
