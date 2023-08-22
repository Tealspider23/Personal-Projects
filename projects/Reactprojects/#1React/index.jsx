


//ReactDOM.render(<h1>Hello everyone!</h1>, document.getElementById('root'))

//React code using ul and list items

// ReactDOM.render(
// <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//  document.getElementById('root')
//  )


//React code for navigation bar

// function MainContent(){

// return(
//     <h1>
//         I am learning React ! 
//     </h1>

// )
// }

// ReactDOM.render(
//     <div>
         
//         <MainContent />
    
//     </div>,
//     document.getElementById('root')
// )

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// const navbar = (
//     <nav>
//         <h1>tailor</h1>
//         <ul><li>pricing</li>
//         <li>About</li>
//         <li>contact</li>
//         </ul>
//         </nav>
// )


// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


const page = (
    <div>
        <img src ="download.png" alt="react logo" width="40px" height="40px" />
        <h1>Fun Facts about React</h1>
       
        <ul>
            <li>was first released in 2013</li>
            <li>was originally created by Jordan Walke</li>
            <li>has well over 100K stars on Github</li>
            <li>is maintained by facebook</li>
            <li>Powers thousand of enterprise apps , including mobile apps </li>
        </ul>
    </div>
)
//You can do the same as a function
// function page(){
//     return(
//         <div>
//         <img src ="download.png" alt="react logo" width="40px" height="40px" />
//         <h1>Fun Facts about React</h1>

//         <ul>
//             <li>was first released in 2013</li>
//             <li>was originally created by Jordan Walke</li>
//             <li>has well over 100K stars on Github</li>
//             <li>is maintained by facebook</li>
//             <li>Powers thousand of enterprise apps , including mobile apps </li>
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(
//     page(),
//     document.getElementById("root")
// )
//unlike the const page , the function page must be called with <page/> 
//in the ReactDOM.render() method 
// and get the function name in pascal case. - page must be written as Page.


// document.getElementById("root").append(JSON.stringify(page))
//ReactDOM.render(page, document.getElementById("root"))

//Custom components

// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="download.png" width="40px" />
//                 </nav>
//             </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))


//Quiz
// 1. What is a React component?
// ans - a function that returns JSX


// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
// ans - the function name should be in pascal case

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }
// ```
// ans - the image tag should have an alt attribute

// import React from "react"
// import ReactDOM from "react-dom"

// /**
// Challenge: 

// - Move the `footer` into its own component called "Footer" 
//   and render that component inside the Page component.
// - Move the `h1` and `ol` together into another component
//   called "MainContent" and render inside Page as well.
// */

// function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img src="download.png" width="40px" />
//                 <ul className="nav-items">
//                     <li>About</li>
//                     <li>Pricing</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

// function Footer(){
//     return(
//         <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//     )
// }

// function MainContent(){
//     return(
//         <div>
//         <h1>Reasons I'm excited to learn React</h1>
//          <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             </div>
//     )
// }

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))


