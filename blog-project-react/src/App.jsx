// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const todoTitle = "Call Family123520";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate delectus provident voluptatum porro debitis vero vel expedita nihil pariatur?";
const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentday = date.getDate();

function App() {
  return (
    <>
      
       <div>
        <h1>TODO APP</h1>
        <h3>{todoTitle}</h3>
        <p>{todoDesc}</p>
        <p>{ currentday + "/" +  currentMonth + "/" + currentYear  }</p>
       </div>
     
     
    </>
  )
}

export default App
