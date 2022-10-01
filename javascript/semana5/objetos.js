let persona;

function crearPersona() {
	persona = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		talla: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.talla / 2.54;
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

	console.log(persona);
}
