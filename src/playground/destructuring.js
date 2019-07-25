//
// OBJECT DESTRUCTURING
//

// const person = {
//     name: 'Gurra',
//     age: 29,
//     location: {
//         city: 'Stockholm',
//         temp: 23
//     }
// };

// const { name = 'Anonymous', age } = person; //set default for name

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//         year: '1994'
//     }
// };

// const { name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName)



//
// ARRAY DESTRUCTURING
//

const address = ['1299 Odengatan', 'Stokholm Stad', 'Stockholm', '11322'];

// const address = [];

const [street, city ='Någon stad i sverige', state = 'Nånstans i Sverige', zip] = address;
//can also use below if we only want a specific value
// const [, , state] = address;

console.log(`You are in ${city}, ${state}`);





const item = ['Coffee (hot)', '$2', '$2,50', '$3'];

const [product, , mediumPrice ] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);
