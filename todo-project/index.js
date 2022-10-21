const listTasks = document.querySelector(".container__tasks");
const inputTask = document.querySelector("#input-task");
const btnCreate = document.querySelector("#btn-create");

const url = "http://localhost:4000";

btnCreate.onclick = async function () {
  const textTask = inputTask.value;

  if (textTask === "") {
    alert("Debes completar el nombre");
    return;
  }

  const task = await storeTask(textTask);
  renderTask(task);
};

async function getTasks() {
  try {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();

    listTasks.innerHTML = "";

    data.tasks.forEach((task) => {
      renderTask(task);
    });
  } catch (error) {
    console.log(error);
  }
}

async function storeTask(name) {
  try {
    const response = await fetch(`${url}/task`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        status: 1,
      }),
    });
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.log(error);
  }
}

function renderTask(task) {
  listTasks.innerHTML += `<task-card status="${task.status}" name="${task.name}"></task-card>`;
}

getTasks();
