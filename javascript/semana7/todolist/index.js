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
