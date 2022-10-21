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
app.post("/task", (req, res) => {
  const task = req.body;
  tasks.push(task);
  // Le voy a responder al cliente:
  res.status(201).json({
    message: "ok",
    task,
  });
});

app.get("/jugadores-balon-oro", (req, res) => {
  // winners of gold ball
  const players = [
    {
      name: "Karin Benzema",
      year: 2022,
      img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/benzema-2022.jpg",
    },
    {
      name: "Leo Messi",
      year: 2021,
      img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2021.jpg",
    },
    {
      name: "Leo Messi",
      year: 2019,
      img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2019.jpg",
    },
    {
      name: "Luka Modric",
      year: 2018,
      img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/modric-2018.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      year: 2017,
      img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/cristiano-ronaldo-2017.jpg",
    },
  ];
  res.json(players);
});
// PUT:
// DELETE:

app.listen(4000);
