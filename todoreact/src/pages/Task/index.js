import { useParams, useNavigate, Link } from "react-router-dom";

function Task() {
	const { id } = useParams();
	const history = useNavigate();

	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App / task: {id}</h1>
			<a onClick={() => history("/")} className="my-3 btn btn-link">
				Regresar
			</a>
		</div>
	);
}

export default Task;
