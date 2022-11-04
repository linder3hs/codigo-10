import { useState, useEffect } from "react";
import { get, getProfile } from "../../services";

const Profile = () => {
  const [user, setUser] = useState(null);

  const [tasks, setTask] = useState(null);

  const fetchUser = async () => {
    const response = await getProfile();
    const listTasks = await get();
    const createdTask = listTasks.filter((task) => task.status === 1);
    const doneTask = listTasks.filter((task) => task.status === 2);
    setTask({
      created: createdTask.length,
      done: doneTask.length,
    });
    setUser(response);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <div className="text-center">
          <img
            src={user.avatar_url}
            className="rounded-circle"
            width={300}
            alt=""
          />
          <a href={user.blog}>
            <h1 className="mt-4">{user.name}</h1>
          </a>
          <p className="mt-3 fw-bold">{user.bio}</p>
          <h3>Tareas Pendientes: {tasks.created}</h3>
          <h3>Tareas Terminadas: {tasks.done}</h3>
        </div>
      )}
    </div>
  );
};

export default Profile;
