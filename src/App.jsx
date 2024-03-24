import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./index.css";
import oldContacts from "../contacts.json";

function App() {
  // Створення списку контактів за допомогою state:
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");

    if (!stringifiedContacts) return oldContacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  // Фільтрація - SearchBar:

  const [filter, setFilter] = useState("");

  const handleOnChange = (evt) => {
    setFilter(evt.target.value);
  };

  // Додавання нових контактів до списку контактів через форму ContactForm:
  const addContacts = (formData) => {
    const newContacts = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, newContacts]);
  };

  // Видалення контактів:
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Збереження контактів в localStorage:
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox filter={filter} handleOnChange={handleOnChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
