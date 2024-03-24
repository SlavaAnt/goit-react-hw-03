// function App() {
//   // Створення списку контактів за допомогою state:
//   const [contacts, setContacts] = useState(() => {
//     const stringifiedContacts = localStorage.getItem("contacts");

//     if (!stringifiedContacts) return oldContacts;

//     const parsedContacts = JSON.parse(stringifiedContacts);
//     return parsedContacts;
//   });

//   // Фільтрація - SearchBar: стан фільтру зберігається в компоненті App, а потрібні компоненту SearchBox значення передаються як пропси. Тобто фільтрація масиву контактів виконується в компоненті App, а її результат - масив відфільтрованих контактів - передається пропсом компоненту ContactList.
//   // 1. При зміні в інпуті спрацьовує подія onChange;
//   // 2. Подія onChange викликає функцію handleOnChange;
//   // 3. Функція handleOnChangeяка змінює стан (змінює перший елемент стану filter за допомогою другого елементу - функції setFilter());
//   // 4. Елемент filter (його значення) присвоюється значенню input - value.
//   // 5.

//   const [filter, setFilter] = useState("");

//   const handleOnChange = (evt) => {
//     setFilter(evt.target.value);
//   };

//   // Додавання нових контактів до списку контактів через форму ContactForm:
//   // 1. Кожен контакт повинен бути об'єктом з властивостями name, number та id;
//   // 2. Відображення списку контактів відбувається в компонентах ContactList та Contact при події onSubmit;
//   // 3. Подія onSubmit в компоненті ContactList викликає функцію handleSubmit;
//   // 4. Функція handleSubmit викликає функцію addContacts з App, в аргумент якої передається об'єкт з доданими контактами;
//   // 5. Функція addContacts передається з компоненту App в ContactList через пропси.
//   const addContacts = (formData) => {
//     const newContacts = {
//       ...formData,
//       id: nanoid(),
//     };
//     setContacts((prevContacts) => [...prevContacts, newContacts]);
//   };

//   // Видалення контактів
//   const filteredContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.toLowerCase().includes(filter.toLowerCase())
//   );

//   const onDeleteContact = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== contactId)
//     );
//   };

//   // Збереження контактів в localStorage
//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="container">
//       <h1>Phonebook</h1>
//       <ContactForm addContacts={addContacts} />
//       <SearchBox filter={filter} handleOnChange={handleOnChange} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={onDeleteContact}
//       />
//     </div>
//   );
// }

// export default App;

// ===============================================
// const ContactForm = ({ addContacts }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const contact = {
//       name: event.currentTarget.contactName.value,
//       number: event.currentTarget.contactPhone.value,
//     };

//     addContacts(contact);

//     event.currentTarget.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.formLabel}>
//         <span className={css.formInputName}>Name</span>
//         <input
//           className={css.formInput}
//           type="text"
//           name="contactName"
//           placeholder="Enter name"
//           required
//         />
//       </label>
//       <label className={css.formLabel}>
//         <span className={css.formInputName}>Number</span>
//         <input
//           className={css.formInput}
//           type="tel"
//           name="contactPhone"
//           placeholder="Enter phone number"
//           required
//         />
//       </label>
//       <button className={css.formBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };
