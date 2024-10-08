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

// const headingStyle = {
//   color: "white",
//   backgroundColor: "purple",
//   textAlign: "center",
//   fontSize : "3rem",
//   padding : "15px",
// };

function App() {
  return (
    <>
      <div>
        {/* <h1 style={{color : "green",backgroundColor: "gray",textAlign:"center"}}>TODO APP</h1>,  inline style */}
        {/* <h1 style = {headingStyle}>TODO APP</h1>  */}
        <h1 className="headingStyle">TODO APP</h1>
        <div style = {{
         backgroundColor:"green",
         width: "400px",
           boxShadow:"4px 8px 8px gray",
           margin: "10px",
           padding: "10px",
           }}>
          <h3 className="titleStyle">{todoTitle}</h3>
          <p className="descStyle">{todoDesc}</p>
          <p className="footer">
            {currentday + "/" + currentMonth + "/" + currentYear}
          </p>
        </div>
      </div>
    </>
  );
}

export default App
