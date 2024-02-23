import React, { useState } from 'react'

interface Props {
    name:string;
    email:string;
    age:number;
    isMarried:boolean;
    friends:string[];
    city:City;
}

export enum City{
    Aligarh="Aligarh",
    Saharanpur="Saharanpur",
    Gurgaon="Gurgaon",
    Bangalore="Bangalore"
    
}

export function Person(props:Props) {
    const [state,setState]=useState<string>("");

    return (
        <div>
            <h1>Name : {props.name}</h1>
            <h1>Email : {props.email}</h1>
            <h1>Age : {props.age}</h1>
            <h1>This person {props.isMarried?"is":"is not"} married</h1>
            {props.friends.map((friend:string)=>
                <h1>{friend}</h1>
            )}
            <h2>City : {props.city}</h2>
        </div>
    )
}

export default Person
