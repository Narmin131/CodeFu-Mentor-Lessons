import React from 'react'

const UserInfo = () => {


    const user = JSON.parse(localStorage.getItem('MyUser'))


  return (
    <>
       <h2>{user.email}</h2>
       <h3>{user.pass}</h3>
    </>
  )
}

export default UserInfo