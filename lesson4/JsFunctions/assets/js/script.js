// Call, apply, bind

let person = {
    name: 'Narmin',
    surname: 'Mammadova'
}

function fullName() {
    console.log('Your name: ' + this.name + ' Your surname: ' + this.surname);
}

fullName.call(person)
fullName.apply(person)
const newFunction = fullName.bind(person)
newFunction()

let city = {
    myCity : 'Baku'
}

function getCity(country) {
    console.log(' Your city: ' + this.myCity + ' And your country ' + country);
}

getCity.call(city, 'Azerbaijan')
getCity.apply(city, ['Azerbaijan'])