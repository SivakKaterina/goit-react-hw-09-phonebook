import React, { useEffect } from "react";
import C from "./contactList.module.css";
import { connect, useSelector } from "react-redux";
import {
  deleteContact,
  getVisibleContacts,
  fetchContact,
} from "../../redux/contacts";
// import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import { getIsAuth } from "../../redux/auth/auth-selector";

const ContactList = ({ contacts, onDeleteList, fetchContact }) => {
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    isAuth && fetchContact();
  }, [fetchContact]);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <button className={C.button} onClick={() => onDeleteList(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteList: (id) => dispatch(deleteContact(id)),
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
