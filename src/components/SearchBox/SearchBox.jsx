import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, handleOnChange }) => {
  return (
    <label className={css.searchBox}>
      <span className={css.searchBoxInputName}>
        Find contacts by name or number
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleOnChange}
      />
    </label>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  filter: PropTypes.string,
  handleOnChange: PropTypes.func,
};
