// importar nuestro task
import { Task } from "./task.js";

const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

//vamos a crear un arreglo vacio
const arrayTasks = [];

// !!Nota:Cuando una funcion no tiene nombre se llama funcion anonima
btnCreate.onclick = function () {
  const taskText = inputTask.value;

  // Ahora vamos a validar que el taskText no este vacio
  if (taskText === "") {
    alert("Debe completar la caja de texto");
    return;
  }

  const task = new Task(taskText, new Date(), 1);
  arrayTasks.push(task);

  listTask.innerHTML += task.render();

  inputTask.value = "";
};
