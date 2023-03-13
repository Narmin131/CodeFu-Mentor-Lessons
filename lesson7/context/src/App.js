import React from 'react'
import Contacts from "./components/Contacts"
import Form from "./components/Form"
import { ToastContainer } from 'react-toastify';
import Books from './components/Books';
import Wishlist from './components/Wishlist';



const App = () => {

  return (
    <>
      <ToastContainer autoClose={1000} pauseOnHover={false} />
      {/* <Form />
      <Contacts /> */}
      <Books />
      <Wishlist/>
    </>
  )
}

export default App