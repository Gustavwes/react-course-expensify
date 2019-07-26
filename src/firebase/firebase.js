import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const database = firebase.database();

export {firebase, database as default };



// // child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added - runs for all existing entries, and all that are added after
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// expenses.map((expense) => {
//     database.ref('expenses').push({
//         description: expense.description,
//         note: expense.note,
//         amount: expense.amount,
//         createdAt: expense.createdAt
//     });
// });

// database.ref('notes').push({
//     title: 'Course toptics',
//     body: 'React-Native'
// });

// database.ref('notes/-LkhXxyIwhy1FUAXOaxg').remove();

// const firebaseNotes = {
//     notes: {
//         asdfpsadf: {
//             title: 'First object title',
//     body: 'A little note'
//         },
//         secondsadf: {
//             title: "Second object title",
//     body: "S small note"
//         }
//     }
// };

// const notes = [ {
//     id:12,
//     title: 'First object title',
//     body: 'A little note'
// }, {
//     id:124,
//     title: "Second object title",
//     body: "S small note"
// }]

// database.ref('notes').set(firebaseNotes);


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('age').set(18);

// const onValueChange = database.ref().on('value', (snapshot) => { //.on means everytime the data changes in database
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(15);
// }, 3500);
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//     database.ref('age').set(45);
// }, 10500);

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((error) => {
//     console.log('Error fetching data', error);
// });

// database.ref().set({
//     name:'Gustav Westberg',
//     age:29,
//     stressLevel: 5,
//     job: {
//         title: 'Webdeveloper',
//         company: 'Google'
//     },
//     location : {
//         city: 'Malmö',
//         country: 'Sweden'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/title": 'Backend Developer',
//     "job/company": 'Amazon',
//     "location/city": 'Stockholm' //syntax for updating a child

// }).then(() => {
//     console.log('Updated data is saved');
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Remove succeded');
//     }).catch((error) => {
//         console.log('Remove failed', error)
//     });

