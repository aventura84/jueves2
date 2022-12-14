import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auto = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <p>
      Logged in as <Link to={"/user/${user.id}"}>{user.email}</Link>("")
      <button onClick={() => logout()}>logOut</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
