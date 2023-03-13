import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
const Form = () => {

  const [contact, setContact] = useState()

  const { setContacts, contacts } = useContext(GlobalContext)

  const submitForm = (e) => {
    e.preventDefault()
    const newContact = {
      id:uuidv4(),
      name:contact
    }
    setContacts([...contacts, newContact])
    setContact('')
    toast.success('Contact successfully added')
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" onChange={(e) => setContact(e.target.value)} value={contact} />
        <button>Add contact</button>
      </form>
    </>
  )
}

export default Form