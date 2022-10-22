class Card extends HTMLElement {
	constructor() {
		super();
		this.class = "card p-3";
	}

	static get observedAttributes() {
		return ["class", "classname", "shadow"];
	}

	attributeChangedCallback(prop, oldvalue, newvalue) {
		this[prop] = newvalue;
		if (prop == "shadow") {
			console.log(newvalue);
			this.classList.remove("shadow-sm", "shadow", "shadow-lg");
			if (newvalue == "large") this.classList.add("shadow-lg");
			if (newvalue == "medium") this.classList.add("shadow");
			if (newvalue == "small") this.classList.add("shadow-sm");
		}
	}

	// Cuando este elemento sea llamado a Renderizarse:
	connectedCallback() {
		if (this.class) {
			const lista_de_clases = this.class.split(" ");
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}

		if (this.classname) {
			const lista_de_clases = this.classname.split(" ");
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}
	}

	// Cuando este elemento sea quitado de la renderización:
	disconnectedCallback() {}
}

customElements.define("my-card", Card);
