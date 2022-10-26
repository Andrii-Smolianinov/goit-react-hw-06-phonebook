import PropTypes from 'prop-types';
import { ContactUl } from 'components/ContactsList/ContactListStyled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { BsTelephoneOutbound } from 'react-icons/bs';
const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();
  const onDeleteItem = id => dispatch(removeContact(id));

  return (
    <ContactUl>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id}>
            <BsTelephoneOutbound size={13} />
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
