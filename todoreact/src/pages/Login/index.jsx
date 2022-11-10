import "./index.css";

const Login = () => {
  return (
    <div className="bg__login">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="card text-center p-3"
          style={{
            width: 400,
          }}
        >
          <div className="my-3">
            <h1>Login</h1>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Ingrese su email"
            />
            <input
              type="password"
              className="form-control mt-4"
              placeholder="Ingrese su password"
            />
            <div className="d-grid">
              <button className="btn btn-outline-primary mt-4">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
