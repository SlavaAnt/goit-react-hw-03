import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsContainer}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactBox}>
            <Contact
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
