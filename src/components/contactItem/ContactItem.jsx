// import css from './ContactItem.module.css';
// import PropTypes from 'prop-types';

export default function ContactItem({ name, number }) {
  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
    </>
  );
}
