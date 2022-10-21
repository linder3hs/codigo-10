class TaskCard extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.status = 1;
  }

  static get observedAttributes() {
    return ["name", "status"];
  }

  attributeChangedCallback(name, _, newvalue) {
    switch (name) {
      case "name":
        this.name = newvalue;
        break;
      case "status":
        this.status = newvalue;
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    const classListStatus = {
      1: "task__in__progress",
      2: "task__end",
      3: "task__delete",
    };

    this.innerHTML = `
        <div class=${classListStatus[this.status]}>
          <div class="row">
            <div class="col-10">
              <h3>${this.name}</h3>
            </div>
            ${
              this.status === "1"
                ? `<div class="col-2">
              <button class="btn btn-warning">
                <img src="./images/edit-2.svg" width="20" alt="" />
              </button>
              <button class="btn btn-success">
                <img src="./images/check-circle.svg" width="20" alt="" />
              </button>
              <button class="btn btn-danger">
                <img src="./images/trash-2.svg" width="20" alt="" />
              </button>
            </div>`
                : ""
            }
            
          </div>
        </div>`;
  }
}

customElements.define("task-card", TaskCard);
