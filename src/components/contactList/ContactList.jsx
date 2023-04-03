// import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

export default function ContactList({children}) {
  return (
    <ul>
      {children}
    </ul>
  );
}

// export default function ContactList({contacts}) {
//     return (
//       <ul>
//         {contacts.map(contact => <li id={contact.id}></li>)}
//       </ul>
//     );
//   }