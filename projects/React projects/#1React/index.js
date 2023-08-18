


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

// document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page, document.getElementById("root"))
