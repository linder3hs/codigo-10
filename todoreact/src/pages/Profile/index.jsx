import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getProfile } from "../../services";

const Profile = () => {
  const { user: userContext } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await getProfile();

    setUser({
      ...response,
      ...userContext,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
      }}
    >
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-12">
            <h6 className="text-gray">Edit profile</h6>
          </div>
          <div className="col-12 mt-3">
            {user && (
              <div className="row d-flex">
                <div className="col-12 mb-5 text-center">
                  <img
                    src={user.avatar_url}
                    className="rounded-circle"
                    width={100}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.name}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.login}
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={user.email}
                    className="form-control"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Bio</label>
                  <input
                    type="text"
                    value={user.bio}
                    className="form-control"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Blog</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.blog}
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.location}
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.company}
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user?.location?.split(" ")[1]}
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={user.password}
                  />
                </div>
                <div className="col-12 mt-3 d-flex gap-2">
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-danger">Cerrar session</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
