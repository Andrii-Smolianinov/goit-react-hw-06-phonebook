import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { AppStyled } from 'components/AppStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { setFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';
import { getContactsValue } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

const App = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContactsValue);
  console.log('contacts', contacts);
  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const nameNormalized = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === nameNormalized)
    ) {
      alert(name + ' is already in the contacts.');
    } else {
      const id = nanoid();
      dispatch(addContact({ id, name, number }));
    }
  };

  const deleteContact = id => {
    dispatch(removeContact({ id }));
  };

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter value={filter} onChange={(e) => dispatch(setFilter(e.currentTarget.value))} />
          <ContactList
            contacts={contacts}
            filter={filter.toLowerCase()}
            onDeleteItem={deleteContact}
          />
        </>
      )}
    </AppStyled>
  );
};

export default App;
