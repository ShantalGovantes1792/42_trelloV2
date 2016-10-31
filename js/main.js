
var botonAgregar = document.getElementById("botonAgregar");
	botonAgregar.addEventListener("click", anadirLista);

function anadirLista(e){

	// CONTENEDOR
	var contenedor = document.getElementById("contenedor");

	// DIV DEL BOTON
	var cajaLista = document.getElementById("cajaLista");


	// DIV CAJA CON INPUT Y BOTON
	var divList = document.createElement("div");
		contenedor.insertBefore(divList, botonAgregar);


	var cuadroTexto = document.createElement("input");
		cuadroTexto.classList.add("form-control");
		cuadroTexto.setAttribute("placeholder","Añadir una lista");

	
	// boton de agregar, despues el estilo y texto dentro del boton
	var botonAgregar = document.createElement("button");
		botonAgregar.classList.add("btn","btn-success");
		botonTexto = document.createTextNode("Guardar");


	// agregar texto al boton
	botonAgregar.appendChild(botonTexto);

	// agregar la clase al boton
	botonAgregar.classList.add("btn");

	// agregar div al contenedor
	contenedor.appendChild(divList);

	// agregar input al div
	divList.appendChild(cuadroTexto);

	// agregar al div el botonAgregar
	divList.appendChild(botonAgregar);
	// contenedor.insertBefore(cajaLista,divList);

	// funcion para agregar una tarjeta apretando el boton Guardar



	botonAgregar.addEventListener("click", anadirTarjeta);

 	function anadirTarjeta(e){ //funcion para añadir tarjeta
		// contenedor.removeChild(divList);

		// DIV CON TEXTAREA Y BOTON
		var divNuevaTarjeta = document.createElement("div");
		var tituloTarjeta = document.createElement("h4");
		divNuevaTarjeta.classList.add("divNuevaTarjeta");
		tituloTarjeta.innerHTML = cuadroTexto.value;
		divNuevaTarjeta.appendChild(tituloTarjeta);
		cuadroTexto.value = "";
		contenedor.appendChild(divNuevaTarjeta);
		var input2 = document.createElement("textarea");
			input2.classList.add("form-control");
		input2.setAttribute("placeholder","Añade una tarea");
		var botonAnEt = document.createElement("button");
			botonAnEt.classList.add("btn","btn-success");
			botonAnEtTexto = document.createTextNode("Añadir");
		botonAnEt.appendChild(botonAnEtTexto);
		divNuevaTarjeta.appendChild(input2);
		divNuevaTarjeta.appendChild(botonAnEt);
	
	botonAnEt.addEventListener("click", anadirTarea);

		function anadirTarea(e){
			var tareas = document.createElement("p");
				tareas.classList.add("btn-tarea");
				tareas.innerHTML = input2.value;
			input2.value="";
			divNuevaTarjeta.appendChild(tareas);
			divNuevaTarjeta.insertBefore(tareas, input2);

		}

	}

}





