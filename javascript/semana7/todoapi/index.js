import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const tasks = [];

app.get("/", (req, res) => {
	res.json({
		message: "Hola",
	});
});

// GET: generalmente se usa para pedirle datos al servidor:
app.get("/tasks", (req, res) => {
	res.json({
		tasks: tasks,
	});
});

// POST: generalmente se usa para enviarle datos al servidor:
app.post("/puerta", (req, res) => {
	const task = req.body;
	tasks.push(task);
	// Le voy a responder al cliente:
	res.json({
		message: "ok",
	});
});

// PUT:
// DELETE:

app.listen(4000);
