import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Profile from './profiles';
import Counter from './Counter';
import NoteApp from './NoteApp';
import Calculator2 from './Calculator2';
import Final from './Choice_chosing_thingy'
let root = document.getElementById('root')



// let hour = 1427
   
// // const Profile = () => {
// // return(<div>
// // <p>lorem ipsum dolor</p>
// //         <p>The time is: {1427}</p>
// //         <p>Hello {person.name}</p>
// //         <p>He is {person.age}</p>
// //         <p>His power is {person.powers}</p>
// //         <p>{person.car ? person.car : "NO CAR"}</p> 
// // </div>)
// // }

    

// let person = {
//     name: "Malik",
//     age: 19,
//     powers: "hi",
//     car: "BMW"
// }
// person.car ? console.log("I have a car"): console.log("I have no car")

// let template = (
//     <div>
//         <p>lorem ipsum dolor</p>
//         <p>The time is: {1427}</p>
//         <p>Hello {person.name}</p>
//         <p>He is {person.age}</p>
//         <p>His power is {person.powers}</p>
//         <p>{person.car ? person.car : "NO CAR"}</p>
//         <FUN />
//     </div>
    
//)

// ReactDOM.render(<Profile name = {person.name}
// age = {person.age}
// powers = {person.powers}
// car = {person.car}
// />,root)
ReactDOM.render(<Final />, root)