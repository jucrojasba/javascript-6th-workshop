// Ruta del archivo data.json
const url = "data.json";
// Reservaciones
let bookings = [],
id = 1;

//Función para validar que el valor ingresado por el ususario sea un valor numerico
function validateNumber(value) {
  const validateNumber = /^\d+$/;
  if (validateNumber.test(value)) {
    return true;
  } else {
    alert(`Opción inválida, porfavor ingresa números`);
    return false;
  }
}

//Funcion para validar que el nombre ingresado por el usuario solo tenga su primer nombre y su primer apellido
function validateGuestName(value) {
  const validateWord = /^[a-zñáéíóú]+ [a-zñáéíóú]+$/i;
  if (validateWord.test(value)) {
    return true;
  } else {
    alert(`Valor inválido, ingresa tu primer nombre y tu primer apellido`);
  }
}

//Funcion para validar que la fecha sea despues de hoy() y que este ingresada en formato DD/MM/AAAA
function validateDate(value) {
  const validateDate = /^\d{2}\/\d{2}\/\d{4}$/;
  const hoy = new Date();
  if (validateDate.test(value)) {
    const [dia, mes, año] = value.split("/");
    const fechaUsuario = new Date(`${año}-${mes}-${dia}`);
    if (fechaUsuario.getTime() > hoy.getTime()) {
      return true;
    } else {
      alert(
        `La fecha no puede ser antes de hoy, porfavor ingresa una fecha correcta`
      );
      return false;
    }
  } else {
    alert(
      `Formato inválido, ingresa porfavor una fecha con el siguiente formato: DD/MM/AAAA`
    );
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
    }, 1000);
  });
}

//Funcion generación de Id
function generarGeneradorId() {
  return function () {
    return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
  };
}

// Función para registrar reservas
function crearReserva(a, b) {
  let numeroHabitacion,
    cantidadHuespedes,
    fechaInicio,
    fechaFin,
    huesped,
    rooms = a,
    roomTypes = b,
    flag=true;
  validateCantidadHuespedes();
  validateHabitacion();
  if(flag){
    checkin();
  checkout();
  validateGuest();
  confirmationBooking();
  }else{
    menu();
  }
  function validateCantidadHuespedes() {
    do {
      cantidadHuespedes = parseFloat(
        prompt(
          `Te damos la bienvenida! \n\nPara iniciar tu proceso de reserva cuentanos:\n\n¿cuantos huespedes se quedaran en la misma habitación? (máx 6) \n\nEscribe profavor un número:`
        )
      );
    } while (!validateNumber(cantidadHuespedes) || cantidadHuespedes > 6);
  }
  function validateHabitacion() {
    let roomNumberAvailable = rooms.map((room) => {
      if (
        room.availability &&
        parseFloat(
          roomTypes.find((type) => type.id === room.roomTypeId).capacity
        ) >= cantidadHuespedes
      ) {
        return room.number;
      }
    });
    do {
      numeroHabitacion = parseFloat(
        prompt(
          "Las habitaciones disponibles para esa cantidad de personas son:" +
            rooms
              .map((room) => {
                if (
                  room.availability &&
                  parseFloat(
                    roomTypes.find((type) => type.id === room.roomTypeId)
                      .capacity
                  ) >= cantidadHuespedes
                ) {
                  return `\nRoom Number: ${room.number} (${
                    roomTypes.find((type) => type.id === room.roomTypeId).name
                  })`;
                }
              })
              .join(" ") +
            "\n\nIngrese el numero de habitacion a reservar:"
        )
      );
      if (!roomNumberAvailable.includes(numeroHabitacion)) {
        alert(
          `Esa habitación no se encuentra en la lista proporcionada, vuelve a intentarlo`
        );
        flag = false;
      }
    } while (
      !validateNumber(numeroHabitacion));
    
  }
  function checkin() {
    do {
      fechaInicio = prompt(
        "Ingresa la fecha en la que nos visitaras (check in): \n\nEscribela porfavor en formato DD/MM/AAAA"
      );
    } while (!validateDate(fechaInicio));
  }
  function checkout() {
    let dateFin, dateInicio;
    do {
      fechaFin = prompt(
        "Ingresa la fecha en la que saldrás (check out): \n\nEscribela porfavor en formato DD/MM/AAAA"
      );
      const [diaFin, mesFin, añoFin] = fechaFin.split("/");
      const [diaInicio, mesInicio, añoInicio] = fechaInicio.split("/");

      dateFin = new Date(`${añoFin}-${mesFin}-${diaFin}`);
      dateInicio = new Date(`${añoInicio}-${mesInicio}-${diaInicio}`);
      if (dateFin <= dateInicio) {
        alert(
          `La fecha de check out debe ser posterior a la fecha del check in`
        );
      }
    } while (!validateDate(fechaFin) || dateFin <= dateInicio);
  }
  function validateGuest(){
    do {
      huesped = prompt(
        "Ingresa el primer nombre y el primer apellido de quien reserva de la reserva"
      )
        .trim()
        .toLowerCase();
    } while (!validateGuestName(huesped));
  }
  function confirmationBooking() {
    let confirmBooking = confirm(
      `Resumen de reserva:\n\nHuesped: ${huesped}\nCheck in: ${fechaInicio}\nCheck out: ${fechaFin}\nHabitaciòn: ${numeroHabitacion}\nPrecio por noche: ${
        rooms.find((e) => parseFloat(e.number) == numeroHabitacion).priceNight
      }\n\n¿Desea confirmar la reserva?`
    );
    if (confirmBooking) {
      const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()
      const id = generarId();
      let booking = {
        id,
        huesped,
        numeroHabitacion,
        fechaInicio,
        fechaFin,
      };
      bookings.push(booking);
      rooms.forEach((element) => {
        if (parseFloat(element.number) == numeroHabitacion) {
          element.availability = false;
        }
      });
      alert(
        `La reserva de la habitaciòn ${numeroHabitacion} a nombre de ${huesped} para los dìas ${fechaInicio} y ${fechaFin} ha sido confirmada`
      );
      return rooms;
    } else {
      return rooms;
    }
  }
}

//Funciòn para ver reservas
function verReservas() {
  if (bookings.length != 0) {
    let huesped;
    do {
      huesped = prompt(
        "Ingresa el primer nombre y primer apellido de la persona que hizo la reserva"
      )
        .trim()
        .toLowerCase();
    } while (!validateGuestName(huesped));
    if (bookings.some((e) => e.huesped == huesped)) {
      alert(
        `Las siguientes reservas fueron encontradas a nombre de ${huesped}:\n` +
          bookings
            .filter((e) => e.huesped == huesped)
            .map(
              (e) =>
                `\n- id(${e.id}) Habitaciòn reservada: ${e.numeroHabitacion} para las fechas ${e.fechaInicio} a ${e.fechaFin}`
            )
      );
    } else {
      alert(`No se encontrò ninguna reserva a nombre de ${huesped}`);
    }
  } else {
    alert(`No existen reservaciones en nuestra base de datos`);
  }
}

//Funcion para cancelar reservar
function cancelarReservas(a) {
  let rooms = a;
  if (bookings.length != 0) {
    let huesped;
    do {
      huesped = prompt(
        "Ingresa el primer nombre y primer apellido de la persona que hizo la reserva"
      )
        .trim()
        .toLowerCase();
    } while (!validateGuestName(huesped));
    if (bookings.some((e) => e.huesped == huesped)) {
      alert(
        `Las siguientes reservas fueron encontradas a nombre de ${huesped}:\n` +
          bookings
            .filter((e) => e.huesped == huesped)
            .map(
              (e) =>
                `\n- id(${e.id}) Habitaciòn reservada: ${e.numeroHabitacion} para las fechas ${e.fechaInicio} a ${e.fechaFin}`
            )
      );
      let userId = parseFloat(
        prompt("Ingresa el id de la reservaciòn que deseas cancelar").trim()
      );
      if (bookings.some((e) => e.id == userId && e.huesped == huesped)) {
          let numeroHabitacion = bookings.find(e=>e.id == userId).numeroHabitacion; 
          rooms.forEach((element) => {
            if (parseFloat(element.number) == numeroHabitacion) {
              element.availability = true;
            }});
          bookings = bookings.filter((e) => e.id != userId);
          alert(
            `La reserva a nombre de ${huesped} con id: ${userId} ha sido eliminada con èxito`
          );
          return rooms;
      } else {
        alert(
          `El Id ingresado no ha sido asignado a ninguna reserva, vuelve a intentarlo. \n\nTe redigiremos al menu`
        );
      }
    } else {
      alert(`No se encontrò ninguna reserva a nombre de ${huesped}`);
    }
  } else {
    alert(`No existen reservas agregadas en nuestra base de datos`);
  }
}

//Funcion editar reservas
function editBooking() {
  if (bookings.length != 0) {
    let huesped, 
    fechaInicio,
    fechaFin;
    do {
      huesped = prompt(
        "Ingresa el primer nombre y primer apellido de la persona que hizo la reserva"
      )
        .trim()
        .toLowerCase();
    } while (!validateGuestName(huesped));
    if (bookings.some((e) => e.huesped == huesped)) {
      alert(
        `Las siguientes reservas fueron encontradas a nombre de ${huesped}:\n` +
          bookings
            .filter((e) => e.huesped == huesped)
            .map(
              (e) =>
                `\n- id(${e.id}) Habitaciòn reservada: ${e.numeroHabitacion} para las fechas ${e.fechaInicio} a ${e.fechaFin}`
            )
      );
      let userId = parseFloat(
        prompt("Ingresa el id de la reservaciòn que deseas editar").trim()
      );
      if (bookings.some((e) => e.id == userId && e.huesped == huesped)) {
          let numeroHabitacion = bookings.find(e=>e.id == userId).numeroHabitacion; 
          function checkin() {
            do {
              fechaInicio = prompt(
                "Ingresa la fecha en la que nos visitaras (check in): \n\nEscribela porfavor en formato DD/MM/AAAA"
              );
            } while (!validateDate(fechaInicio));
          }
          function checkout() {
            let dateFin, dateInicio;
            do {
              fechaFin = prompt(
                "Ingresa la fecha en la que saldrás (check out): \n\nEscribela porfavor en formato DD/MM/AAAA"
              );
              const [diaFin, mesFin, añoFin] = fechaFin.split("/");
              const [diaInicio, mesInicio, añoInicio] = fechaInicio.split("/");
        
              dateFin = new Date(`${añoFin}-${mesFin}-${diaFin}`);
              dateInicio = new Date(`${añoInicio}-${mesInicio}-${diaInicio}`);
              if (dateFin <= dateInicio) {
                alert(
                  `La fecha de check out debe ser posterior a la fecha del check in`
                );
              }
            } while (!validateDate(fechaFin) || dateFin <= dateInicio);
          }
          checkin();
          checkout();
          bookings.forEach((element) => {
            if (parseFloat(element.numeroHabitacion) == numeroHabitacion) {
              element.fechaInicio=fechaInicio;
              element.fechaFin = fechaFin;
            }});
          alert(
            `La reserva a nombre de ${huesped} con id: ${userId} ha sido actualizada con èxito`
          );
      } else {
        alert(
          `El Id ingresado no ha sido asignado a ninguna reserva, vuelve a intentarlo. \n\nTe redigiremos al menu`
        );
      }
    } else {
      alert(`No se encontrò ninguna reserva a nombre de ${huesped}`);
    }
  } else {
    alert(`No existen reservas agregadas en nuestra base de datos`);
  }
}

//Funciòn asìncrona para cargar datos y navegar el menu
function menu() {
  cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
      a = rooms;
      b = roomTypes;
      return { a, b };
    })
    .then(({ a, b }) => {
      let flag = true;
      while (flag) {
        const desicion = prompt(
          `Bienvenido a tu asistente de reservas de hotel\n\nElije una de las siguientes opciones:\n\n1. Reservar una habitaciòn\n2. Ver reservas actuales\n3. Cancelar una reserva \n4. Editar una reserva\n5. Salir\n\nEscribe 1, 2, 3, 4 o 5`
        );
        let rooms = a,
          roomTypes = b;
        switch (desicion) {
          case "1":
            crearReserva(rooms, roomTypes);
            break;
          case "2":
            verReservas();
            break;
          case "3":
            cancelarReservas(rooms);
            break;
          case "4":
            editBooking(rooms);
            break;
          case "5":
            flag = false;
            break;
          default:
            alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
            break;
        }
      }
    })
    .catch((error) => {
      console.error("Error al manejar la promesa:", error);
    });
}
menu();
