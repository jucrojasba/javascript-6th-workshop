// Ruta del archivo data.json
const url = "data.json";
// Reservaciones
let bookings =[];

//Función para validar que el valor ingresado por el ususario sea un valor numerico.
function validateNumber(value){
  const validateNumber = /^\d+$/;
  if (validateNumber.test(value)) {
    return true;
  } else {
    alert(`Opción inválida, porfavor ingresa números`);
    return false;
  }
}

//Funcion para validar que el nombre ingresado por el usuario solo tenga su primer nombre y su primer apellido
function validateGuestName(value){
  const validateWord = /^[a-zñáéíóú]+ [a-zñáéíóú]+$/i;
  if (validateWord.test(value)) {
    return  true;
  } else {
    alert(`Valor inválido, ingresa tu primer nombre y tu primer apellido`);
  }
}

//Funcion para validar que la fecha sea despues de hoy() y que este ingresada en formato DD/MM/AAAA
function validateDate(value){
  const validateDate = /^\d{2}\/\d{2}\/\d{4}$/;
  const hoy = new Date();
  if (validateDate.test(value)) {
    const [dia, mes, año] = value.split('/');
    const fechaUsuario = new Date(`${año}-${mes}-${dia}`);
    if (fechaUsuario.getTime() > hoy.getTime()) {
      return true;
    } else {
      alert(`La fecha no puede ser antes de hoy, porfavor ingresa una fecha correcta`);
      return false;
    }
  } else {
    alert(`Formato inválido, ingresa porfavor una fecha con el siguiente formato: DD/MM/AAAA`)
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
// function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped) {
  
//   function generarGeneradorId() {
//     let id = 1; // Variable id se inicializa fuera de la función interna

//     return function () {
//       return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
//     };
//   }

//   const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()

// }

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    let numeroHabitacion, cantidadHuespedes, fechaInicio, fechaFin, huesped;
    do {
      cantidadHuespedes = parseFloat(prompt(`Te damos la bienvenida! \n\nPara iniciar tu proceso de reserva cuentanos:\n\n¿cuantos huespedes se quedaran en la misma habitación? (máx 6) \n\nEscribe profavor un número:`));
      
    } while (!validateNumber(cantidadHuespedes) || cantidadHuespedes>6);
    let roomNumberAvailable = rooms.map((room) => {
      if(room.availability && parseFloat(roomTypes.find((type) => type.id === room.roomTypeId).capacity) >= cantidadHuespedes){
        return room.number
      };
      });
    do {
      numeroHabitacion = parseFloat(prompt(
        "Las habitaciones disponibles para esa cantidad de personas son:" +
          rooms
            .map((room) => {
              if(room.availability && parseFloat(roomTypes.find((type) => type.id === room.roomTypeId).capacity) >= cantidadHuespedes){
                return `\nRoom Number: ${room.number} (${
                  roomTypes.find((type) => type.id === room.roomTypeId).name
                })`;
              }
            })
            .join(" ")+"\n\nIngrese el numero de habitacion a reservar:" 
      ));
      if(!roomNumberAvailable.includes(numeroHabitacion)){
        alert(`Esa habitación no se encuentra en la lista proporcionada, porfavor ingresa un numero de habiatción válido`)
      }
    } while (!validateNumber(numeroHabitacion) || !(roomNumberAvailable.includes(numeroHabitacion)));

    do {
      fechaInicio = prompt("Ingresa la fecha en la que nos visitaras (check in): \n\nEscribela porfavor en formato DD/MM/AAAA")
    } while (!validateDate(fechaInicio));
    let dateFin, dateInicio;
    do {
      fechaFin = prompt("Ingresa la fecha en la que saldrás (check out): \n\nEscribela porfavor en formato DD/MM/AAAA");
      const [diaFin, mesFin, añoFin] = fechaFin.split('/');
      const [diaInicio, mesInicio, añoInicio] = fechaInicio.split('/');
      
      dateFin = new Date(`${añoFin}-${mesFin}-${diaFin}`);
      dateInicio = new Date(`${añoInicio}-${mesInicio}-${diaInicio}`);
      if((dateFin <= dateInicio)){
      alert(`La fecha de check out debe ser posterior a la fecha del check in`);
      }
    } while (!validateDate(fechaFin) || (dateFin <= dateInicio));
    do {
      huesped = prompt("Ingresa el primer nombre y el primer apellido de quien reserva de la reserva").trim().toLowerCase();
    } while (!validateGuestName(huesped));
    return numeroHabitacion, cantidadHuespedes, fechaInicio, fechaFin, huesped, rooms,roomTypes;
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });