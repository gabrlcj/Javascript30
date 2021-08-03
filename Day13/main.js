// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let firstName = 'Gabriel'
let firstName2 = firstName
console.log(firstName, firstName2)
firstName = 'João'
console.log(firstName, firstName2)


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
// You might think we can just do something like this:
let team = players

// however what happens when we update that array?
// team[3] = 'Maria'

// oh no - we have edited the original array too!
console.log(players, team)

// now here is the problem!
// Ambos os arrays são modificados pois a variavel team faz referencia ao array players
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
team2[3] = 'Lux'
console.log(team2)

// or create a new array and concat the old one in
const team4 = [].concat(players)
team4[1] = 'Gabriel'
console.log(team4)

// or use the new ES6 Spread
const team3 = [...players]
team3[2] = 'Jhin'
console.log(team3)

const team5 = Array.from(players)
team5[3] = 'SuperCool'
console.log(team5) 

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// const captain = person
// captain.number = 100
// console.log(captain)

// Aqui temos o mesmo erro que tinhamos no array onde estamos alterando a variavel que faz referencia ao objeto que acaba alterando ele

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { name: 'Gabriel', age: 23 , number: 999 })
console.log(captain2)

// We will hopefully soon see the object ...spread
const captain3 = {...person}
captain3.number = 100
console.log(captain3)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
