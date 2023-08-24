import React from "react"
// import ReactDOM from "react-dom"
import Navbar from "./Component/navbar"
import Main from "./Component/main"
import "./styles.css"

export default function App(){
    return(
        <div className="Container">
            <Navbar />
            <Main />

        </div>
    )
}