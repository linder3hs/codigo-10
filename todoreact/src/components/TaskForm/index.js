import { useRef } from "react";

function TaskForm(props) {
  const { onSubmitFunction } = props;

  const inputElement = useRef();

  function inputKeyPress(event) {
    if (event.key === "Enter") {
      addButton();
    }
  }

  function addButton() {
    if (inputElement.current.value === "") return;
    onSubmitFunction(inputElement.current.value);
    inputElement.current.value = "";
  }

  return (
    <div className="card p-3 shadow">
      <div className="input-group">
        <input
          id="input_task"
          type="text"
          className="form-control"
          placeholder="My new task..."
          ref={inputElement}
          onKeyPress={inputKeyPress}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={addButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
