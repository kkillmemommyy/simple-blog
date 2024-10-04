import { MyInput } from "../components/UI/input/MyInput";
import { MyButton } from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", 'true');
    navigate("/posts");
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
