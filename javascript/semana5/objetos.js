// Arreglo para guardar infinitas peronas:
const personas = [];

function crearPersona() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		height: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	personas.push(persona1);
	console.log(personas);
}

// Funcion para crear varias 3 personas:
function crearPersonas() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		height: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	const persona2 = {
		name: "linder",
		years: 22,
		gender: "masculino",
		height: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	const persona3 = {
		name: "elvia",
		years: 25,
		gender: "femenino",
		height: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	personas.push(persona1);
	personas.push(persona2);
	personas.push(persona3);
	console.log(personas);
}

// Creamos el MOLDE a partir del cual puedo crear multiples personas:
class Person {
	constructor(name, years, gender, height) {
		this.name = name;
		this.years = years;
		this.gender = gender;
		this.height = height;
	}
	is_adult() {
		return this.years >= 18;
	}
	inches() {
		return this.height / 2.54;
	}
	upper_name() {
		return this.name.toUpperCase();
	}
	capital_name() {
		return (
			this.upper_name().substring(0, 1) +
			this.name.substring(1, this.name.lenght)
		);
	}
}

// Funcion para crear varias personas a partir de 1 modelo:
function crearPersonasClass() {
	const persona1 = new Person("bruno", 32, "masculino", 179);
	const persona2 = new Person("linder", 22, "masculino", 170);
	const persona3 = new Person("elvia", 25, "femenino", 170);
	personas.push(persona1);
	personas.push(persona2);
	personas.push(persona3);

	console.log(personas);
}

function crearPersonasCustom() {
	const nombre = prompt("Nombre: ");
	const edad = prompt("Edad: ");
	const genero = prompt("Genero: ");
	const talla = prompt("Talla: ");
	const persona = new Person(nombre, edad, genero, talla);
	// Agregar a la nueva persona al arreglo "personas":
	personas.push(persona);
	console.log(personas);
}

function notificacion() {
	window.alert("Soy una notificacion");
	console.log(window.location.host);
	console.log(window.location.pathname);
	console.log(window.innerHeight);
	console.log(window.innerWidth);

	// window.open("variables.html", "VariablesTab", "popup");
}

function goVariables() {
	window.location.href = "variables.html";
}
