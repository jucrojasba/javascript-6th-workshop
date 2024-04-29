let score = 0;

function varsCall() {
  let flag = true;
  while (flag) {
    let desicion =
      prompt(`Dado el siguiente còdigo: \n\n// vars call\nconsole.log("Valor de a:", a);\nconsole.log("Valor de b:", b);\nconsole.log("Valor de c:", c);\n\n// functions call\nconsole.log("Resultado de funcionDeclarada:", funcionDeclarada());\nconsole.log("Resultado de funcionExpresada:",funcionExpresada());\n\n// vars declaration\nvar a = 1;\nlet b = 2;\nconst c = 3;\n\n// functions declarations\nfunction funcionDeclarada() {\n  return "Función declarada ha sido llamada.";\n}\n\nconst funcionExpresada = function () {
          return "Función expresada ha sido llamada.";\n}; \n\n\nSe mostraran los valores de a, b y c? Escribe: si o no`);
    switch (desicion.toLowerCase().trim()) {
      case "si":
        alert(
          `Incorrecto! La instrucciòn:\n\n--> console.log("Valor de a:", a); \nMostrara en consola Valor de a: undefined\n\nExplicaciòn: las variables declaradas con var son inicializadas con undefined y son hoisted \n\n--> console.log("Valor de b:", b);\nMostrara en consola Error\n\n-->console.log("Valor de c:", c);\nMostrara en consola Error\n\nExplicaciòn: las variables declaradas con let y const no pueden ser accedidas antes de su declaración`
        );
        flag = false;
        break;
      case "no":
        alert(
          `Correcto! La instrucciòn:\n\n--> console.log("Valor de a:", a); \nMostrara en consola Valor de a: undefined\n\nExplicaciòn: las variables declaradas con var son inicializadas con undefined y son hoisted \n\n--> console.log("Valor de b:", b);\nMostrara en consola Erro\n\n-->console.log("Valor de c:", c);\nMostrara en consola Error\n\nExplicaciòn: las variables declaradas con let y const no pueden ser accedidas antes de su declaración`
        );
        score += 100 / 2;
        flag = false;
        break;
      default:
        alert(`Opciòn invàlida, porfavor escribe si o no`);
        break;
    }
  }
}
function functionsCall() {
  let flag = true;
  while (flag) {
    let desicion =
      prompt(`Dado el siguiente còdigo: \n\n// vars call\nconsole.log("Valor de a:", a);\nconsole.log("Valor de b:", b);\nconsole.log("Valor de c:", c);\n\n// functions call\nconsole.log("Resultado de funcionDeclarada:", funcionDeclarada());\nconsole.log("Resultado de funcionExpresada:",funcionExpresada());\n\n// vars declaration\nvar a = 1;\nlet b = 2;\nconst c = 3;\n\n// functions declarations\nfunction funcionDeclarada() {\n  return "Función declarada ha sido llamada.";\n}\n\nconst funcionExpresada = function () {
            return "Función expresada ha sido llamada.";\n}; \n\n\n¿Que ocurrira cuando se llamen las funciones por consola?\n\na. Se mostrara el valor de funcionDeclarada y se generara un error al intentar mostrar el valor de funcionExpresada\n\nb. El programa mostrara un error al llamar ambas funciones\n\nc. Se mostrara el valor de funcionExpresada y se generara un error al intentar mostrar el valor de funcionDeclarada`);
    switch (desicion.toLowerCase().trim()) {
      case "a":
        alert(
          `Correcto! Las funciones declaradas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración. Mientras que, las funciones expresadas son alojadas en una variable y solo pueden ser llamadas despues de su declaraciòn`
        );
        score += 100 / 2;
        flag = false;
        break;
      case "b":
        alert(
          `Incorrecto! Las funciones declaradas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración. Mientras que, las funciones expresadas son alojadas en una variable y solo pueden ser llamadas despues de su declaraciòn`
        );
        flag = false;
        break;
      case "c":
        alert(
          `Incorrecto! Las funciones declaradas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración. Mientras que, las funciones expresadas son alojadas en una variable y solo pueden ser llamadas despues de su declaraciòn`
        );
        flag = false;
        break;
      default:
        alert(`Opciòn invàlida, porfavor escribe a, b o c`);
        break;
    }
  }
}

function menu() {
  alert(
    `Bienvenido al quiz de Hoisting en JavaScript, presion OK para continuar`
  );
  varsCall();
  functionsCall();
  alert(`Tu score es: ${score.toFixed(2)}%`);
}
menu();
