import React from 'react';

const Profile = (props) => {
    return(<div>
    <p>lorem ipsum dolor</p>
            <p>The time is: {1427}</p>
            <p>Hello {props.name}</p>
            <p>He is {props.age}</p>
            <p>His power is {props.powers}</p>
            <p>{props.car ? props.car : "NO CAR"}</p> 
    </div>)
    }

    export default Profile