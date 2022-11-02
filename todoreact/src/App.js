import { TaskForm } from "./components";

function App() {
	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App</h1>
			<TaskForm />
			<div className="text-primary">
				<hr />
			</div>
		</div>
	);
}

export default App;
