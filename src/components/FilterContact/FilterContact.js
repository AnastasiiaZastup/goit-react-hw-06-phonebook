import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from './FilterContact.styled';
import { updateFilter } from '../../redux/filterSlice';
import { filterFilter } from '../../redux/filter';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterFilter);

  return (
    <Filters>
      Filter contacts by name:
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Filters>
  );
};
