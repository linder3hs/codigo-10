const listTasks = document.querySelector(".container__tasks");

const url = "http://localhost:4000";

async function getTasks() {
  try {
    const response = await fetch(`${url}/tasks`);
    const data = await response.json();
    console.log(data.tasks);
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getTasks();
