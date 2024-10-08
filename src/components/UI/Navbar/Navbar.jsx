import { Link } from "react-router-dom";
import { MyButton } from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">
          О сайте
        </Link>
        <Link to="/posts" className="navbar__link">
          Посты
        </Link>
      </div>
    </div>
  );
};
