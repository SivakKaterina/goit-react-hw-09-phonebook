import { connect, useDispatch, useSelector } from "react-redux";
import { fetchContact } from "./redux/contacts/contacts-operations";
import AppBar from "./components/Navigation/AppBar";
import { Switch } from "react-router-dom";
import ContactsPage from "./views/ContactsPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/RegisterPage";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { useEffect } from "react";
import { getIsAuth } from "./redux/auth/auth-selector";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);
  return (
    <div className="container">
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PrivatRoute
          path="/contacts"
          redirectTo="/login"
          component={ContactsPage}
        />
        <PublicRoute
          restricted
          path="/login"
          redirectTo="/contacts"
          component={LoginPage}
        />
        <PublicRoute
          restricted
          path="/register"
          redirectTo="/contacts"
          exact
          component={RegisterPage}
        />
      </Switch>
    </div>
  );
};

const mapDispachToProps = (dispatch) => ({
  fetchContact: () => dispatch(fetchContact()),
});
export default connect(null, mapDispachToProps)(App);
