console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

alert(`Al ejecutar el programa se observaron los siguientes resultados:\n\nIntentando llamar a 'funcionDeclarada' antes de su declaración:\nFunción declarada ha sido llamada.\n\nIntentando llamar a 'funcionExpresada' antes de su declaración:\nError: Cannot access 'funcionExpresada' before initialization\n\nLlamando a 'funcionDeclarada' después de su declaración:\nFunción declarada ha sido llamada.\n\nLlamando a 'funcionExpresada' después de su declaración:\nFunción expresada ha sido llamada.\n\n\nExplicaciòn: esto se debe a que las funciones declaradas son hoisted mientras que las expresadas solo pueden ser accedidas despuès de su declaraciòn.`)