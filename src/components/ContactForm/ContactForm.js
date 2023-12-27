import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  Form,
  Field,
  ErrorMessage,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const phoneExample = /^\d{3}-\d{2}-\d{2}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  number: Yup.string()
    .matches(phoneExample, 'Enter the similar number 000-00-00')
    .required('Required'),
});



export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const AddContacts = value => {
    const check = contacts.some(contact => contact.name.toLowerCase() === value.name.toLowerCase());
    if(check) {
      console.warn(`${value.name} is already in contacts. Contact not added.`);
    } else {
      dispatch(addContact(value));
    }
  }

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          AddContacts(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </Label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
