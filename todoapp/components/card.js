class Card extends HTMLElement {
	constructor() {
		super();
		this.class = "card p-3";
		this.classname = "";
	}

	static get observedAttributes() {
		return ["class", "classname"];
	}

	attributeChangedCallback(prop, oldvalue, newvalue) {
		this[prop] = newvalue;
	}

	// Cuando este elemento sea llamado a Renderizarse:
	connectedCallback() {
		if (this.class) {
			const classList = this.class.split(" ");
			classList.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}

		if (this.classname) {
			const classList = this.classname.split(" ");
			classList.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}
	}

	// Cuando este elemento sea quitado de la renderización:
	disconnectedCallback() {}
}

customElements.define("my-card", Card);
