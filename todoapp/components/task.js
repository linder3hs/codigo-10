class Task extends HTMLElement {
	constructor(_text = "") {
		super();
		this.text = _text;
		this.status = "created";
		this.created_at = new Date();
	}

	static get observedAttributes() {
		return ["text", "status"];
	}

	setAttribute(attr, value) {
		super.setAttribute(attr, value);
		this.render();
	}

	attributeChangedCallback(prop, oldvalue, newvalue) {
		this[prop] = newvalue;
	}

	connectedCallback() {
		this.render();

		const host = this;

		let checkButton = this.querySelector(".checkButton");
		if (checkButton) {
			checkButton.addEventListener("click", function () {
				host.setAttribute("status", "done");
			});
		}
	}

	render() {
		const className = {
			created: "none",
			done: "bg-primary bg-opacity-25",
			deleted: "bg-danger bg-opacity-25",
		};

		const buttonCheck = () => {
			if (this.status == "created") {
				return `<a class="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton">&check;</a>`;
			} else {
				return `<a class="btn btn-sm btn-success py-0 small opacity-50 disabled">&check;</a>`;
			}
		};

		const showButtons = () => {
			if (this.status != "deleted") {
				return `
				<span>
                    <a class="btn btn-sm btn-outline-secondary py-0 small opacity-50">&#9998;</a>
                    <a class="btn btn-sm btn-outline-danger py-0 small opacity-50 deleteButton">&times;</a>
                </span>
				`;
			}
			return "";
		};

		this.innerHTML = `
        <my-card classname="mt-3 ${className[this.status]}" shadow="${
			this.status == "done"
		}">
            <div class="d-flex">
                <span class="me-3">
                    ${buttonCheck()}
                </span>
                <span>
                    ${this.text}
                </span>
            </div>
            <hr class="border border-muted border-1">
            <div class="d-flex justify-content-between">
                <span class="text-muted small">${this.created_at}</span>
				${showButtons()}
            </div>
        </my-card>
        `;
	}
}

customElements.define("my-task", Task);
