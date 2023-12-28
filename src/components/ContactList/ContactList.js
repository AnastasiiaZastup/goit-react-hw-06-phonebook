import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/select';
import { filterFilter } from '../../redux/filter';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterFilter);

  const getContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Item key={id}>
              <p>{name}:</p>
              <p>{number}</p>
              <ButtonList onClick={() => dispatch(deleteContact({ id }))}>
                Delete
              </ButtonList>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
