const tasksList = document.querySelector("#tasks_list");
const inputTask = document.querySelector("#input_task");

inputTask.addEventListener("keyup", function (ev) {
	if (ev.key === "Enter" && this.value !== "") {
		const task = new Task(this.value);
		tasksList.append(task);

		this.value = "";
		this.focus();
	}
});
