// import css from './ContactItem.module.css';
// import PropTypes from 'prop-types';

export default function ContactItem({ contacts }) {
  return contacts.map(contact => (
    <li id={contact.id}>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button type="button">Delete</button>
    </li>
  ));
}
