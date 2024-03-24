import PropTypes from "prop-types";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <ul>
        <li className={css.contact}>
          <IoPersonSharp />
          <p>{name}</p>
        </li>
        <li className={css.contact}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
      <button
        onClick={() => onDeleteContact(id)}
        className={css.contactBtn}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
