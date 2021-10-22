const operaciones = [
  {
    descripcion: "Sueldo",
    categoria: "Trabajo",
    fecha: "01/01/2021",
    monto: 50000,
    tipo: "Ganancia",
  },
  {
    descripcion: "Pago de alquiler",
    categoria: "Alquiler",
    fecha: "02/01/2021",
    monto: 15000,
    tipo: "Gasto",
  },
  {
    descripcion: "Pago de expensas",
    categoria: "Alquiler",
    fecha: "02/01/2021",
    monto: 5000,
    tipo: "Gasto",
  },
  {
    descripcion: "Pago de internet",
    categoria: "Servicios",
    fecha: "10/01/2021",
    monto: 2000,
    tipo: "Gasto",
  },
  {
    descripcion: "Trabajo freelance",
    categoria: "Trabajo",
    fecha: "15/01/2021",
    monto: 20000,
    tipo: "Ganancia",
  },
  {
    descripcion: "Cena con amigas",
    categoria: "Salidas",
    fecha: "18/01/2021",
    monto: 1500,
    tipo: "Gasto",
  },
];
//Mostrar en consola "Cena con amigas" (encontralo en el array de objetos)

console.log(operaciones[3].fecha);

//Mostrar en consola "10/01/2021"

console.log(operaciones);

//Mostrar en consola "Servicios"

console.log(operaciones[3].categoria);

//Crea un nuevo objeto llamado nuevaOperacion con los siguientes valores: para descripcion, "Veterinaria". Para categoria, "Mascotas". Para fecha, "19/01/2021". Para monto, "2500". Para tipo, "Gasto".
const nuevaOperacion = {
  descripcion: "Veterinaria",
  categoria: "Mascotas",
  fecha: "19/01/2021",
  monto: 2500,
  tipo: "Gasto",
};

//Agrega el objeto recien creado al array operaciones.
operaciones.push(nuevaOperacion);

//Recorre con un map operaciones y guarda el array resultante con el nombre copiaOperaciones. El nuevo array sera exactamente igual al anterior, pero en lugar de tener el monto como un numero, lo tendra como un string. (Pista: despues de hacer el ejercicio 6, chequea con un console log que operaciones siga teniendo sus propiedades monto como numero. Si no es asi, recorda usar el spread operator!)

copiaOperaciones = operaciones.map((operacion) => {
  let operacionEditada = { ...operacion };
  operacionEditada.monto = String(operacionEditada.monto);
  return operacionEditada;
});
console.log(copiaOperaciones);

const filtroOperaciones = operaciones.filter((operacion) => {
  return operacion.monto > 3000;
});
console.log(filtroOperaciones);

//Recorre con un filter operaciones y guarda el array resultante con el nombre ganancias. El array nuevo debera tener solo aquellas operaciones cuyo tipo sea "Ganancia" en lugar de "Gastos".

const ganancias = operaciones.filter((operacion) => {
  return operacion.tipo === "Ganancia";
});
console.log(ganancias);

//Recorre con un map operaciones y guarda en una nueva variable totalGastos la suma de todos los montos de los objetos cuyo tipo sea "gasto" (Pista: vas a necesitar una acumuladora)

let totalGastos = 0;

const gastos = operaciones.filter((operacion) => {
  return operacion.tipo === "Gasto";
});
const sumaGastos = gastos.map((gasto) => {
  totalGastos += gasto.monto;
});
console.log(totalGastos);

const contenedorItemNuevaOperacion = document.querySelector(
  "#contenedor-item-nueva-operacion"
);

const colorDeMonto = (objeto) => {
  if (objeto.tipo === "Ganancia") {
    return "has-text-success";
  } else {
    return "has-text-danger";
  }
};

let acc = "";
const convertirOperacionesaHTML = (operaciones) => {
  operaciones.map((operacion) => {
    acc += `<div id="item-nueva-operacion" class="columns is-mobile">
        <p id="descripcion-item-operacion" class="column is-3 mr-0-mobile has-text-weight-semibold">${
          operacion.descripcion
        }</p>
        <div class="column is-3 is-6-mobile">
          <p id="categoria-item-operacion" class="tag is-primary is-light">${
            operacion.categoria
          }</p>
        </div>
        <p id="fecha-item-operacion" class="column is-2 is-hidden-mobile">${
          operacion.fecha
        }</p>
        <p id="monto-item-operacion" class="column is-2 is-3-mobile has-text-weight-bold ${colorDeMonto(
          operacion
        )}">$ ${operacion.monto}</p>
        <div class="column is-2 is-3-mobile pt-0">
          <button id="boton-editar-item-operaciones" class="button is-ghost is-small pt-0 pb-0">Editar</button>
          <button id="boton-eliminar-item-operaciones" class="button is-ghost is-small pt-0">Eliminar</button>
        </div>
        </div>`;
  });
};

convertirOperacionesaHTML(operaciones);
contenedorItemNuevaOperacion.innerHTML = acc;
console.log(acc);
