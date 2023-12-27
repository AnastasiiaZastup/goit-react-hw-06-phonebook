import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getContacts = () => {
    if (filter === "") {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(item => (
          <Item key={item.id}>
            <p>
              {item.name} : {item.number}
            </p>
            <ButtonList onClick={() => dispatch(deleteContact({ id: item.id }))}>
              Delete
            </ButtonList>
          </Item>
        ))}
      </ul>
    </div>
  );
};
