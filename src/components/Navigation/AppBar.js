import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";
import { getIsAuth } from "../../redux/auth/auth-selector";
import { logout } from "../../redux/auth/auth-operations";
import { getUsername } from "../../redux/auth/auth-selector";

const AppBar = ({ name }) => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  return (
    <nav className={s.navigation}>
      <div className={s.homeContainer}>
        <NavLink className={s.navlink} to="/" exact>
          {" "}
          Home{" "}
        </NavLink>
        {isAuth && (
          <NavLink className={s.navlink} to="/contacts" exact>
            Contacts
          </NavLink>
        )}
      </div>
      {isAuth ? (
        <div className={s.clientContainer}>
          <img
            className={s.img}
            src="https://image.flaticon.com/icons/png/512/1177/1177568.png"
            alt="аватар пользователя"
            width="32"
          ></img>
          <span className={s.text}>Welcome, {name}!</span>
          <button className={s.buttonLogout} onClick={() => dispatch(logout())}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <NavLink className={s.navlink} to="/register" exact>
            Register
          </NavLink>
          <NavLink className={s.navlink} to="/login" exact>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  name: getUsername(state),
});

export default connect(mapStateToProps)(AppBar);
