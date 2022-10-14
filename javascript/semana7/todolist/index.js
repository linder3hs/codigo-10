const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

//vamos a crear un arreglo vacio
let arrayTasks = [];

// !!Nota:Cuando una funcion no tiene nombre se llama funcion anonima
btnCreate.onclick = function () {
    const taskText = inputTask.value;

    // Ahora vamos a validar que el taskText no este vacio
    if (taskText === "") {
        alert("Debe completar la caja de texto");
        return;
    }

    const task = new Task(arrayTasks.length + 1, taskText, new Date(), 1);
    arrayTasks.push(task);

    listTask.innerHTML += task.render();

    inputTask.value = "";
};

function destroy(id) {
    // como podemos eliminar un elemento de un array
    // En la condicion podemos decir que traiga todos los elemenots menos el que tenga
    // el id que estamos recibiendo
    //? Que retorna filter? = Array
    const filterTask = arrayTasks.filter((task) => task._id !== Number(id));
    // Acá estamos diciendo que el valor. de arrayTask. es ahora filterTask
    arrayTasks = filterTask;
    Task.destroyRender(id);
}

// Edit v1
/* function edit(id) {
    const newText = prompt("Ingresa el nuevo nombre de la tarea");
    // find solo retorna 1 element
    const oneTask = arrayTasks.find((task) => task._id === id);

    // cuando if ejecuta 1 sola linea de codigo se puede evitar
    // usar las { }
    if (oneTask === undefined) return

    oneTask._name = newText;

    Task.updateRender(id, newText);
} */

// Edit v2
function edit(id) {
    const element = document.querySelector(`#task-name-${id}`);
    element.style.display = "none";
    // Para poder crear un elemento de type node tenemos que usar la
    // funcion createElement
    const container = document.createElement("div"); // <div></div>
    container.id = `task-edit-${id}`
    container.style.display = "flex";
    container.style.gap = "5px";

    const input = document.createElement("input"); // <input type="text" placeholder="Ingresa el nuevo nombre" />
    input.id = `task-edit-input-${id}`
    input.type = "text";
    input.placeholder = "Ingresa el nuevo nombre";

    const button = document.createElement("button"); // <button>Save</button>
    button.textContent = "Save"
    button.style.backgroundColor = "#ccc";
    button.onclick = function () {
        if (input.value === "") {
            alert("Debe escribir un nombre");
            return;
        }
        // updapte a nivel de array
        const oneTask = arrayTasks.find((task) => task._id === id);
        oneTask._name = input.value;

        // update a nivel visual
        element.textContent = input.value;
        element.style.display = "block";
        container.remove();
    }

    const buttonCancel = document.createElement("button"); // <button>Cancel</button>
    buttonCancel.textContent = "Cancel"
    buttonCancel.style.backgroundColor = "#ccc";
    buttonCancel.onclick = function () {
        container.remove();
        element.style.display = "block";
    }

    container.appendChild(input); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" /> </div>
    container.appendChild(button); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> </div>
    container.appendChild(buttonCancel); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> <button>Cancel</button> </div>

    // Recordemos que element es el h6 y queremos poner el container al costado
    // parentNode.insertBefore = coloca el containe antes del h6
    // element.nextSibling = cambien la posición a despues del h6
    element.parentNode.insertBefore(container, element.nextSibling);
}
