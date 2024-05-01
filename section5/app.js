// Ruta del archivo data.json
const url = "data.json";

//Función para validar que el valor ingresado por el ususario sea de 3 digitos y sea un valor numerico.
function validateNumber(value){
  const validateNumber = /^\d{3}$/;
  if (validateNumber.test(value)) {
    return true;
  } else {
    alert(`Opción inválida, porfavor ingresa el numero de la habitación que deseas reservar`);
    return false;
  }
}

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Función para registrar reservas
function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped) {
  function generarGeneradorId() {
    let id = 1; // Variable id se inicializa fuera de la función interna

    return function () {
      return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
    };
  }

  const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()

  // Pruebas
  console.log(generarId()); // 1
  console.log(generarId()); // 2
  console.log(generarId()); // 3
  console.log(generarId()); // 4
  console.log(generarId()); // 5
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    let userInput;
    do {
      userInput = prompt(
        "Ingrese el numero de habitacion a reservar: " +
          rooms
            .map((room) => {
              return `\nRoom Number: ${room.number} (${
                roomTypes.find((type) => type.id === room.roomTypeId).name
              })`;
            })
            .join(" ")
      );
    } while (!validateNumber(userInput.trim()));
    return userInput;
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });