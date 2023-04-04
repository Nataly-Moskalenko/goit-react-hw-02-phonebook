import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onAddContact = data => {
    const newContact = { id: nanoid(), name: data.name, number: data.number };    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));   
  };

  render() {
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
        <ContactForm onSubmit={this.onAddContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
        ></ContactList>
      </div>
    );
  }
}
