import { useEffect, useState, useRef } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container, SectionTitle } from './App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

const LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const initialValues = useRef(true);

  useEffect(() => {   
    if (initialValues.current) {      
      if (JSON.parse(localStorage.getItem(LS_KEY))) { setContacts(JSON.parse(localStorage.getItem(LS_KEY))) }
      initialValues.current = false;
      return;
    } 
  }, []);

  useEffect(() => { 
    if (!initialValues.current) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSubmit = (obj) => {
    setContacts(prevContacts => [...prevContacts, obj])
  }

  const isNamePresent = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
  };

  return (<>
    <PageTitle>goit react hw 04 phonebook</PageTitle>
    <Container>
      <SectionTitle>Phonebook</SectionTitle>
      <ContactForm onSubmit={handleSubmit} isNamePresent={isNamePresent} />
      <Filter value={filter} onChange={changeFilter} />
      <SectionTitle>Contacts</SectionTitle>
      <Contacts contacts={getVisibleContacts()} onDelete={handleDeleteContact} />
    </Container>
  </>
  );
}