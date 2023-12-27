import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from './FilterContact.styled';
import { onUpdateContact } from 'redux/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter); 

  return (
    <Filters>
      Filter contacts by name:
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(onUpdateContact(evt.target.value))}
      />
    </Filters>
  );
};
