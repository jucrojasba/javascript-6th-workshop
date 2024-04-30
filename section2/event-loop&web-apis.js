console.log(`Mensaje 1: Inmediatamente`);
setTimeout(() => {
  console.log(`Mensaje 2: Con timeout de 0 segundos`);
}, 0);
setTimeout(() => {
  console.log(`Mensaje 3: Con timeout de 1 segundos`);
}, 1);
//Esto se debe a que Javascript ejecuta primero las tareas sincronicas. Despues ejecuta las tareas sasincronicas primero los microtask y luego los macrotask.
