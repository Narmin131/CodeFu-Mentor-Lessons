import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from 'react-toastify'
const Contacts = () => {

  const { contacts, setContacts } = useContext(GlobalContext)

  const deleteContact = (a) => {
    const filteredArray = contacts.filter((item, index) => {
      return (
        item.id !== a
      )
    })
    setContacts(filteredArray)
  }


  return (
    <div>
      {
        contacts?.map((item, index) => (
          <li>{item.name} <button 
          onClick={() => {
            deleteContact(item.id)
            toast.error('You deleted contact')
          }}>Remove contact</button></li>
        ))
      }
    </div>
  )
}

export default Contacts