import React from 'react'
import "./App.css"; 
export function Home(){
    return(
        <div>
            <h1 style={{color: "darkorchid", textAlign: 'center'}} >Welcome to Home Page</h1>
            <img src='welcome.gif' alt='oops!' className='image'/>
        </div>
    )
}