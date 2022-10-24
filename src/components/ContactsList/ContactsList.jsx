import PropTypes from 'prop-types';
import { ChangeBackground } from 'components/ContactsList/BackgroundList';
import { ContactUl } from 'components/ContactsList/ContactListStyled';

const ContactList = ({ contacts, filter, onDeleteItem }) => {
  return (
    <ContactUl>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id} style={ChangeBackground()}>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteItem(contact.id)}>Delete</button>
          </li>
        ))}
    </ContactUl>
  );
};

export { ContactList };

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
