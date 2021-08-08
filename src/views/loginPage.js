import { useState } from "react";
import { useDispatch } from "react-redux";
import Section from "../components/Section";
import { login } from "../redux/auth/auth-operations";
import s from "./views.module.css";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    clearInput();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <Section title={"Login"}>
      <form className={s.form} action="" onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="">
          <p className={s.text}>Введите логин</p>
          <input
            className={s.input}
            name="email"
            value={email}
            type="text"
            onInput={onChange}
          />
        </label>
        <label className={s.label} htmlFor="">
          <p className={s.text}>Введите пароль</p>
          <input
            className={s.input}
            name="password"
            value={password}
            type="password"
            onInput={onChange}
          />
        </label>
        <button className={s.button}>Login</button>
      </form>
    </Section>
  );
};
export default LoginPage;
