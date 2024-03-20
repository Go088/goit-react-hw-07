import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <b>Loading...</b>}
      {error && <b>Server Errors</b>}
      <ContactList />
    </div>
  );
};
