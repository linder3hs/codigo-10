const people = [];

// Literal Object:
function crearPersona() {
	const nombre = prompt("Nombre:");
	const edad = prompt("Edad:");
	const sexo = prompt("Sexo:");
	const person = {
		name: nombre,
		years: edad,
		sex: sexo,
		birthYear: function () {
			return new Date().getFullYear() - this.years;
		},
	};

	people.push(person);
	console.log(people);
}

// Class Object:
class Person {
	constructor(_name, _years, _sex) {
		this.name = _name;
		this.years = _years;
		this.sex = _sex;
	}
	get birthYear() {
		return new Date().getFullYear() - this.years;
	}
	set birthYear(_birthYear) {
		this.years = new Date().getFullYear() - _birthYear;
	}
}
function crearPersonaClass() {
	const nombre = prompt("Nombre:");
	const edad = prompt("Edad:");
	const sexo = prompt("Sexo:");
	const person = new Person(nombre, edad, sexo);
	people.push(person);
	console.log(people);
}

function buscarPersona() {
	const term = prompt("Nombre: ");
	const persona_encontrada = people.find((person) => term === person.name);
	console.log(persona_encontrada);
}
