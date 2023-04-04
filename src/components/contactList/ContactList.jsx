import ContactItem from '../contactItem/ContactItem';
// import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
          ></ContactItem>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
