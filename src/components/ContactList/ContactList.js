import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Contact } from 'components/Contact/Contact';

const getVisibleContacts = (filterValue, contactsList) => {
  if (filterValue && filterValue !== null && contactsList) {
    return contactsList.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  } else {
    return contactsList;
  }
};

export const ContactList = () => {
  const contactValue = state => state.contacts;
  const { items } = useSelector(contactValue);

  const getFilter = state => state.filter;
  const filterValue = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(filterValue, items);

  return (
    <ul>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <Contact name={name} number={phone} id={id} />
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
