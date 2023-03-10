//CLASES
class Vehiculo {
  constructor(marca, modelo, anio, sumaAsegurada, tieneGas) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.sumaAsegurada = sumaAsegurada;
    this.tieneGas = tieneGas;
  }

  obtenerRecargoAnio() {
    return this.anio < 2010
      ? 1.5
      : this.anio < 2012
      ? 1.3
      : this.anio < 2016
      ? 1.15
      : this.anio < 2020
      ? 1.07
      : 1;

    // if (this.anio < 2010) {
    //   return 1.5;
    // } else if (this.anio < 2012) {
    //   return 1.3;
    // } else if (this.anio < 2016) {
    //   return 1.15;
    // } else if (this.anio < 2020) {
    //   return 1.07;
    // } else {
    //   return 1;
    // }
  }

  obtenerRecargoGas() {
    return this.tieneGas ? 1.2 : 1;

    // if (this.tieneGas){
    //   return 1.2
    // }else{
    //   return 1
    // }
  }

  obtenerTasa() {
    let vhEncontrado = listaModelos.find(
      valor =>
        valor.marca.toLowerCase() === this.marca.toLowerCase() &&
        valor.modelo.toLowerCase() === this.modelo.toLowerCase()
    );
    return vhEncontrado.tasaBasica;
  }
}

//LISTAS
const listaModelos = [
  { id: 1, marca: "Volkswagen", modelo: "Gol", tasaBasica: 1.5 },
  { id: 2, marca: "Volkswagen", modelo: "Polo", tasaBasica: 1.5 },
  { id: 3, marca: "Volkswagen", modelo: "Saveiro", tasaBasica: 1.5 },
  { id: 4, marca: "Volkswagen", modelo: "Amarok", tasaBasica: 1.5 },
  { id: 5, marca: "Fiat", modelo: "Argo", tasaBasica: 1.8 },
  { id: 6, marca: "Fiat", modelo: "Palio", tasaBasica: 1.8 },
  { id: 7, marca: "Fiat", modelo: "Cronos", tasaBasica: 1.8 },
  { id: 8, marca: "Fiat", modelo: "Punto", tasaBasica: 1.8 },
  { id: 9, marca: "Honda", modelo: "Fit", tasaBasica: 1.4 },
  { id: 10, marca: "Honda", modelo: "Civic", tasaBasica: 1.4 },
  { id: 11, marca: "Honda", modelo: "City", tasaBasica: 1.4 },
  { id: 12, marca: "Honda", modelo: "CRV", tasaBasica: 1.4 },
  { id: 13, marca: "Toyota", modelo: "Corolla", tasaBasica: 1.6 },
  { id: 14, marca: "Toyota", modelo: "Yaris", tasaBasica: 1.6 },
  { id: 15, marca: "Toyota", modelo: "Hilux", tasaBasica: 1.6 },
  { id: 16, marca: "Toyota", modelo: "Etios", tasaBasica: 1.6 },
  { id: 17, marca: "Toyota", modelo: "SW4", tasaBasica: 1.6 },
  { id: 18, marca: "Peugeot", modelo: "207", tasaBasica: 2.2 },
  { id: 19, marca: "Peugeot", modelo: "208", tasaBasica: 2.2 },
  { id: 20, marca: "Peugeot", modelo: "308", tasaBasica: 2.2 },
  { id: 21, marca: "Peugeot", modelo: "408", tasaBasica: 2.2 },
];
const listaPlanes = [
  { id: 1, nombre: "Tercero Basico", factorRecargo: 1 },
  { id: 2, nombre: "Tercero Completo", factorRecargo: 1.1 },
  { id: 3, nombre: "Todo Riesgo", factorRecargo: 1.2 },
];
const listaCoberturas = [
  { id: 1, cobertura: "RC contra terceros Parcial y Total", planes: [1, 2, 3] },
  { id: 2, cobertura: "Servicios de Gr??a las 24 hs", planes: [1, 2, 3] },
  { id: 3, cobertura: "Incendio Total", planes: [1, 2, 3] },
  { id: 4, cobertura: "Incendio Parcial", planes: [2, 3] },
  { id: 5, cobertura: "Robo Total", planes: [1, 2, 3] },
  { id: 6, cobertura: "Robo Parcial", planes: [2, 3] },
  { id: 7, cobertura: "Accidente Total", planes: [3] },
  { id: 8, cobertura: "Cristales Parcial y Total", planes: [1, 2, 3] },
  { id: 9, cobertura: "Granizo Parcial y Total", planes: [2, 3] },
  { id: 10, cobertura: "Parabrisas Parcial y Total", planes: [2, 3] },
  {
    id: 11,
    cobertura: "Rotura de Cerraduras Sin L??mite y Sin Deducible",
    planes: [3],
  },
  { id: 12, cobertura: "Accidentes Personales", planes: [3] },
  {
    id: 13,
    cobertura: "Extensi??n de Cobertura a Pa??ses Lim??trofes",
    planes: [1, 2, 3],
  },
];

// SELECT MARCAS
const selectMarca = document.querySelector("#marcaVh");
//Genero lista de marcas sin Duplicados
let marcas = listaModelos.map(valor => valor.marca);
const listaMarcas = marcas.filter((item, index) => {
  return marcas.indexOf(item) === index;
});
//Actualizo Opciones de Select Marcas
selectMarca.innerHTML = `<option selected="true" disabled="disabled">Seleccione una marca</option>`;
for (let vehiculo of listaMarcas) {
  selectMarca.innerHTML += `<option value="${vehiculo.index}">${vehiculo}</option>`;
}

// SELECT MODELOS
const selectModelo = document.querySelector("#modeloVh");
//Actualizo Opciones de Select Modelos
selectModelo.innerHTML = `<option selected="true" disabled="disabled">Seleccione una marca</option>`;
selectMarca.addEventListener("change", actualizarSelectModelo);
function actualizarSelectModelo() {
  let marcaSeleccionada = selectMarca.options[selectMarca.selectedIndex].text;
  selectModelo.innerHTML = `<option selected="true" disabled="disabled">Seleccione un modelo</option>`;
  let listaModelosFiltrados = listaModelos.filter(
    valor => valor.marca.toLowerCase() === marcaSeleccionada.toLowerCase()
  );
  for (modelo of listaModelosFiltrados) {
    selectModelo.innerHTML += `<option value="${modelo.index}">${modelo.modelo}</option>`;
  }
}

//SELECT GAS
const selectGas = document.querySelector("#tieneGas");

//SELECT A??O
const inputAnio = document.querySelector("#anioVh");
inputAnio.addEventListener("change", verificarAnio);
function verificarAnio(){
if (isNaN(inputAnio.value) || inputAnio.value.length != 4){
  alertaInformativa("El a??o debe ser num??rico con 4 caract??res");
  inputAnio.value = ""
}else if(inputAnio.value < 1998){
  alertaInformativa("No es posible cotizar veh??culos anteriores al a??o 1998");
  inputAnio.value = 1998  
};

}

//SELECT SUMAVH
const inputSumaVh = document.querySelector("#sumaVh");
inputSumaVh.addEventListener("click", () => inputSumaVh.select());
inputSumaVh.addEventListener("change", cambiarFormatoSumaVh);
function cambiarFormatoSumaVh() {
  let valor = quitarFormatoMoneda(inputSumaVh.value);
  if (isNaN(valor) || valor <= 0) {
    inputSumaVh.value = "";
    alertaInformativa("Suma asegurada deben ser numeros enteros positivos");
  } else {
    inputSumaVh.value = formatoMoneda(Math.ceil(valor));
  }
}

//SUBMIT COTIZAR
const formCotizar = document.querySelector("#form-cotizar");
formCotizar.addEventListener("submit", cotizar);
function cotizar(e) {
  e.preventDefault();
  let marcaVh = selectMarca.options[selectMarca.selectedIndex].text;
  let modeloVh = selectModelo.options[selectModelo.selectedIndex].text;
  let sumaVh = quitarFormatoMoneda(inputSumaVh.value);
  let anioVh = Number(inputAnio.value);
  let tieneGasVh =
    selectGas.options[selectGas.selectedIndex].text.toLowerCase() === "si"
      ? true
      : false;

  if (isNaN(sumaVh) || isNaN(anioVh)) {
    alertaInformativa(
      "No es posible cotizar. Suma Asegurada y A??o ingresados deben ser num??ricos"
    );
  } else {
    //Costo Seguro:
    let vehiculo = new Vehiculo(marcaVh, modeloVh, anioVh, sumaVh, tieneGasVh);
    let recargoAnio = vehiculo.obtenerRecargoAnio();
    let recargoGas = vehiculo.obtenerRecargoGas();
    tasaVh = vehiculo.obtenerTasa();
    let costoSeguro =
      ((vehiculo.sumaAsegurada * tasaVh) / 1000) * recargoAnio * recargoGas;

    /** RENDERIZAR **/
    //Div
    let div = document.querySelector("#cotizacion");
    if (div != null) {
      div.remove();
    }
    div = document.createElement("div");
    div.id = "cotizacion";
    div.className = "informacion";

    //SubtituloDiv
    let tituloDiv = document.createElement("h2");
    tituloDiv.className = "subtitulo animate__animated animate__slideInDown";
    tituloDiv.innerText = "Planes Disponibles";
    div.append(tituloDiv);

    //ParrafoDiv
    let parrafo = document.createElement("p");
    if (tieneGasVh === false) {
      parrafo.innerText = `Cotizaci??n para un ${marcaVh} ${modeloVh} ${anioVh} de ${formatoMoneda(
        sumaVh
      )} sin Equipo de Gas:`;
    } else {
      parrafo.innerText = `Cotizaci??n para un ${marcaVh} ${modeloVh} ${anioVh} de ${formatoMoneda(
        sumaVh
      )} con Equipo de Gas:`;
    }
    div.append(parrafo);

    //DivTabla
    let divTabla = document.createElement("div");
    divTabla.className = "table-responsive";

    //Tabla
    let tabla = document.createElement("table");
    tabla.id = "tabla-costo";
    tabla.className = "table scale-in-center";

    //EncabezadoTabla
    let encabezadoTabla = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");
    filaEncabezado.innerHTML = `<th scope="col">Coberturas</th>`;
    listaPlanes.forEach(
      plan =>
        (filaEncabezado.innerHTML += `<th scope="col">${plan.nombre}</th>`)
    );
    encabezadoTabla.append(filaEncabezado);
    tabla.append(encabezadoTabla);

    //CuerpoTabla
    let cuerpoTabla = document.createElement("tbody");
    cuerpoTabla.className = "table-group-divider";
    listaCoberturas.forEach(cobertura => {
      let fila = document.createElement("tr");
      let columnaCob = document.createElement("td");
      columnaCob.innerText = cobertura.cobertura;
      fila.append(columnaCob);

      listaPlanes.forEach(plan => {
        let colummaPlan = document.createElement("td");
        let planEncontrado = cobertura.planes.some(valor => valor === plan.id);
        if (planEncontrado) {
          colummaPlan.innerHTML = `<i class="icon-check">`;
        } else {
          colummaPlan.innerHTML = `<i class="icon-x">`;
        }
        fila.append(colummaPlan);
      });
      cuerpoTabla.append(fila);
    });

    //Fila Costo:
    let filaCosto = document.createElement("tr");
    filaCosto.className = "fila-costo";
    filaCosto.innerHTML = `<td>Costo</td>`;

    //Fila Boton Contratar:
    let filaBoton = document.createElement("tr");
    filaBoton.className = "fila-boton";
    filaBoton.innerHTML = "<td></td>";

    //Rellenado de filaCosto y filaBoton
    listaPlanes.forEach(plan => {
      filaCosto.innerHTML += `<td>${formatoMoneda(
        Math.ceil(costoSeguro * plan.factorRecargo)
      )}</td>`;
      filaBoton.innerHTML += `<td><button id="btnContratar${plan.id}">Contratar</button></td>`;
    });

    //Agregamos elementos al HTML
    cuerpoTabla.append(filaCosto);
    cuerpoTabla.append(filaBoton);
    tabla.append(cuerpoTabla);
    divTabla.append(tabla);
    div.append(divTabla);
    const seccionCotizador = document.querySelector("#cotizador");
    seccionCotizador.append(div);
    formCotizar.reset();

    //AgregadO Evento a Boton Contratar
    listaPlanes.forEach(plan => {
      let boton = document.querySelector(`#btnContratar${plan.id}`);
      boton.addEventListener("click", () =>
        agregarCotizacion(plan.id, plan.nombre, plan.factorRecargo)
      );
    });

    function agregarCotizacion(idPlan, nombrePlan, recargoPlan) {
      let cotizacion = new Cotizacion(
        "automotores",
        idPlan,
        nombrePlan,
        vehiculo,
        Math.ceil(costoSeguro * recargoPlan)
      );
      cotizacion.agregarLS();
    }

    //ViewPort hacia Seccion Planes
    let positionDivCotizacion = div.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + positionDivCotizacion.top - 50);
  }
}