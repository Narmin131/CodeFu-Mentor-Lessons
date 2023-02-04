// Local Storage

// const saveLocalStorage = () => {
//     const myContent = document.querySelector('textarea').value
//     localStorage.setItem('Text', myContent)
// }

// const getFromLocalStorage = () => {
//     const myText = localStorage.getItem('Text')
//     const p = document.querySelector('p')
//     p.innerHTML = myText
// }

// const clearAllStorage = () => {
//     localStorage.clear()
// }

// const removeItemFromLocalStorage = () => {
//     localStorage.removeItem('Text')
// }

// const myObject = {
//     id: 3,
//     name: 'Narmin'
// }

// localStorage.setItem('myObject', JSON.stringify(myObject))
// const a = JSON.parse(localStorage.getItem('myObject'))
// console.log(a);


// Api ile data cekmek

// https://restcountries.com/v3.1/all

// fetch('https://restcountries.com/v3.1/all')
// .then( res => res.json())
// .then( data => console.log(data))
// .catch( err => console.log(err))

// const url = 'https://restcountries.com/v3.1/all'
// const row = document.querySelector('.row')

// const getData = async () => {

//     try {
//         const res = await fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 data.forEach(element => {
//                     const div = document.createElement('div')
//                     div.className = 'col-lg-4 col-md-4 col-sm-6 col-12 p-3'
//                     div.innerHTML = `
//             <div class="card" style="width: 18rem; height: 100% ">
//                         <img src=${element.flags.png} class="card-img-top" alt="...">
//                     <div class="card-body">
//                   <h5 class="card-title">${element.name.common}</h5>
//                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//             </div>
//                     `
//                     row.appendChild(div)
//                 });
//             })
//     }

//     catch (error) {
//         console.log(error);
//     }
// }

// getData()


// function myFunc(){
//     setInterval(()=>{
//         console.log('Function called');
//     }, 6000)
// }

// myFunc()


// console.log('Salam');


// ARRAY METODLARI

// Map
const arr = [4, 6, 7, 11]

const newArray = arr.map((item) => {
    return item * 3
})

console.log(newArray);

// Filter

const Users = [
    {
        id: 1,
        name: 'Narmin',
        surname: 'Mammadova'
    },
    {
        id: 3,
        name: 'Leyla',
        surname: 'Mammadova'
    },
    {
        id: 3,
        name: 'Narmin',
        surname: 'Isgandarova'
    },
    {
        id: 3,
        name: 'Aydan',
        surname: 'Alakbarzada'
    },
    {
        id: 5,
        name: 'Selcan',
        surname: 'Orujlu'
    }
]

const filteredArray = Users.filter((user) => {
    return user.id === 3
}).map((user => console.log(user.name)))


// Length

console.log(Users.length)



// Find

const arr1 = [4, 6, 7, 11, 14, 16]

const b = arr1.find(num => num > 8)
console.log(b)



// ForEach


const arr2 = [4, 6, 7, 11, 14, 16]

arr2.forEach(item => console.log(item))