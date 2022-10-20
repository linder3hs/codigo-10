// Es una clase porque va a extender de HTMLElement
// HTMLElement: Es una clase nativa de JS
class MyCard extends HTMLElement {
  // como esta clase tiene un extends requerimos de un super
  constructor() {
    // usando supper() dentro del contructur vamos a podrear atributos propios
    super();
    this.title = "";
    this.img = "";
    this.message = "";
  }

  // Para poder recibir parametro desde HTML necesitamos 2 funciones
  static get observedAttributes() {
    // En esta funcion vamos a definir que paremtros acepta nuestro componente
    // para poder saber quienes son vamos
    // a defirnolos dentro un array
    return ["title", "message", "img"];
  }

  // como podemos guardar el valor que estamos
  // recibiendo
  attributeChangedCallback(name, _, newvalue) {
    // * name => nombre del atributo
    // * oldvalue => es el valor actual
    // * es el nuevo valor que estamos recibiendo
    switch (name) {
      case "title":
        this.title = newvalue;
        break;
      case "img":
        this.img = newvalue;
        break;
      case "message":
        this.message = newvalue;
        break;
      default:
        break;
    }
  }

  // Para poder asignar html dentro de mi tag
  // debemos llamar a la funcion connectedCallback()

  // esta funcion se ejecuta de forma automatica
  // cuando nuestro component se crea en html
  connectedCallback() {
    this.classList.add("col-12", "col-sm-4", "col-md-3");
    this.innerHTML = `
      <div class="card mt-5">
        <img width="100%" class="card-img-top" src="${this.img}" /> 
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.message}</p>
          <button class="btn btn-link">Leer mas</button>
        </div>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);
