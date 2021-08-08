import { useState } from "react";
import { useDispatch } from "react-redux";
import Section from "../components/Section";
import { register } from "../redux/auth/auth-operations";
import s from "./views.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearInput();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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
    <Section title={"Registration"}>
      <form className={s.form} action="" onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="">
          <p className={s.text}>Введите ваше имя</p>
          <input
            className={s.input}
            name="name"
            type="text"
            value={name}
            onChange={onChange}
          />
        </label>
        <label className={s.label} htmlFor="">
          <p className={s.text}>Введите email</p>
          <input
            className={s.input}
            name="email"
            type="text"
            value={email}
            onChange={onChange}
          />
        </label>
        <label className={s.label} htmlFor="">
          <p className={s.text}>Введите пароль</p>
          <input
            className={s.input}
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <button className={s.button}>Registration</button>
      </form>
    </Section>
  );
};
export default RegisterPage;
