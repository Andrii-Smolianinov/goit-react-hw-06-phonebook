import PropTypes from 'prop-types';
import { ContactDiv } from 'components/Filter/FilterStyled';

const Filter = ({ value, onChange }) => {
  const handleInputChange = name => event => {
    onChange && onChange(event.target.value.trim());
  };

  return (
    <ContactDiv>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={handleInputChange('filter')}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </ContactDiv>
  );
};

export { Filter };

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
