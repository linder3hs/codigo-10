// Es una clase porque va a extender de HTMLElement
// HTMLElement: Es una clase nativa de JS
class Card extends HTMLElement {
  // como esta clase tiene un extends requerimos de un super
  constructor() {
    // usando supper() dentro del contructur vamos a podrear atributos propios
    super();
  }

  // Para poder asignar html dentro de mi tag
  // debemos llamar a la funcion connectedCallback()

  // esta funcion se ejecuta de forma automatica
  // cuando nuestro component se crea en html
  connectedCallback() {
    this.innerHTML = `
    <div class="card">
      <img width="200" src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/lionel-messi-gettyimages-1186194253.jpg?quality=100&strip=info&w=460&h=260&crop=1" /> 
      <h4>Hola desde el componente</h4>
    </div>
    `;
  }
}

customElements.define("my-card", Card);
