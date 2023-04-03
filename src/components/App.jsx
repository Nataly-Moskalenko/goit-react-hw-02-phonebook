import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import ContactItem from './contactItem/ContactItem';
import Filter from './filter/Filter';

export const App = () => {
  // state = {
  //   contacts: [
  //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }

  return (
    <div
      style={{
        height: '100vh', 
        marginLeft: '40px',      
        // display: 'flex',
        // flexDirection: 'column',        
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactItem
          contacts={[
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ]}
        ></ContactItem>
      </ContactList>
    </div>
  );
};
