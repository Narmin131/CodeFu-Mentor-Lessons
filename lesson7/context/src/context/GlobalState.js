import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [contacts, setContacts] = useState(localStorage.getItem('Contacts') ? JSON.parse(localStorage.getItem('Contacts')) : [])

    const [favorites, setFavorites] = useState(localStorage.getItem('Wishlist') ? JSON.parse(localStorage.getItem('Wishlist')) : [])

    const addFavBooks = (book) => {
        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.concat(book)

        setFavorites(newFavorites)
    }

    const removeFavBooks = (id)=>{
        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.filter((item, index)=>(   
               item.id !== id
        ))

        setFavorites(newFavorites)
    }

    useEffect(() => {
        localStorage.setItem('Contacts', JSON.stringify(contacts))
        localStorage.setItem('Wishlist', JSON.stringify(favorites))
    }, [contacts, favorites])

    return (
        <GlobalContext.Provider value={{ contacts, setContacts, favorites, setFavorites, addFavBooks, removeFavBooks}}>
            {children}
        </GlobalContext.Provider>
    )
}