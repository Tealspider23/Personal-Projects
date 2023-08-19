

//Some commonly asked questions in React 
//Why do we need to `import React from "react"` in our files?
//ans - the jsx syntax is defined in React 

//2. If I were to console.log(page) in index.js, what would show up?
//ans - the html code for the page would show up in the console


// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// ans - we need to wrap the h1 and p tags in a div tag or a fragment tag


// 4. What does it mean for something to be "declarative" instead of "imperative"?
// ans - declarative means that we are telling the computer what we want to
// happen, and the computer figures out how to do it. 
//Imperative means that we are telling the computer how to do something step by step.


// 5. What does it mean for something to be "composable"?
// ans - it means that we can take small pieces of code and combine 
//them to make larger pieces of code

const page =(
    <div>
        <h1>Hello</h1>
        <p>This is my website!</p>
    </div>

)

ReactDOM.render(page, document.getElementById("root"))