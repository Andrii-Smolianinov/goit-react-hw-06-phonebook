import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { PhoneBookStyled } from 'components/PhoneBookStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import {
  addContact,
  setFilter,
  getContacts,
  getFilter,
} from 'redux/contactsSlice';

const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const nameNormalized = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === nameNormalized)
    ) {
      Notify.warning(`${name} ${number} is already in the phone book!`);
    } else {
      const id = nanoid();
      dispatch(addContact({ id, name, number }));
    }
  };

  return (
    <PhoneBookStyled>
      <main>
        <h1>
          <span className="spanP">P</span>honebook
        </h1>
        <ContactForm onSubmit={addNewContact} />
      </main>
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={e => dispatch(setFilter(e))} />
          <ContactList contacts={contacts} filter={filter.toLowerCase()} />
        </>
      )}
      
    </PhoneBookStyled>
    
  );
};

export default App;
