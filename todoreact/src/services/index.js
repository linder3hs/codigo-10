const url = "https://63659f46046eddf1baf09724.mockapi.io/tasks";
const urlUsers = "https://63659f46046eddf1baf09724.mockapi.io/users";
const urlBooks = "https://www.googleapis.com/books/v1/volumes?q=";

export const getBooks = async (search) => {
  try {
    const response = await fetch(`${urlBooks}${search}&maxResults=24`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// GET : Listar
// POST: Crear
// PUT: Actualizar
// DELETE: Eliminar
export const getProfile = async () => {
  try {
    const response = await fetch("https://api.github.com/users/linder3hs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const get = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const post = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (user) => {
  try {
    const response = await fetch(urlUsers, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(urlUsers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// id: Tarea
export const update = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Para la eliminar un registro unicamente necesito el id
export const destroy = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
