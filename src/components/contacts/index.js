import { useState, useEffect } from 'react'
import "./styles.css";
import List from "./list/index";
import Form from "./form/index";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sametcan",
      phone_number: "123456"
    }, {
      fullname: "Ahmet",
      phone_number: "789456"
    }, {
      fullname: "Kerem",
      phone_number: "987123"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contact
