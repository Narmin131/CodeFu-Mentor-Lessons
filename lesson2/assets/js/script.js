const btn = document.querySelector('button')

// const changeMode = () => {

//     if (document.body.className === 'light') {
//         document.body.className = 'dark'
//     }
//     else {
//         document.body.className = 'light'
//     }

// }


// btn.addEventListener('click', changeMode)



// With Local Storage Change Mode

let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {

    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'enabled')

}

const disableDarkMode = () => {

    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

const changeMode = () => {

    let darkMode = localStorage.getItem('darkMode')

    if (darkMode === 'enabled') {
        disableDarkMode()
    }
    else {
        enableDarkMode()
    }
}



btn.addEventListener('click', changeMode)