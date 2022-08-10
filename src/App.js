import React from 'react'
// import Home from './components/static/Home'
// import About from './components/static/About'
// import Contact from './components/static/Contact'
// import Services from './components/static/Services'
import Messages from './components/messages/Messages'
// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import Employees from './Employees'
// // import React to create JSX Elements, if not, we can not create JSX Elements
// import {msg1, msg2} from './msg' // obect destructuring concept
// // NOTE: Whenever we are exporting two or more variables from same file, we should follow the object destructuring, if not, we get error.
// import Tasks from './components/tasks/Tasks'
// import Register from './components/auth/Register'
// import UserList from './components/users/List'
// import UserShow from './components/users/Show'


function App(){
    // BrowserRouter is responsible for keep track of all the links
    // use variable(id, name, email etc...) after /users/: id, when you want display particular user
    // Every component is loaded by ReactRouterDOM which provides three properties 1) history 2) location 3) match like <Route path="/users/:id" component={UserShow} /> so in UserShow component we can access three props why because which is loaded by ReactRouterDOM
    return(
        <BrowserRouter>
            <div>
                <h1>React page</h1>
                <Messages />

                {/*
                <Link to="/" >Home</Link> - 
                <Link to="/about">About</Link> -
                <Link to="/services">Services</Link> -
                <Link to="/users">Users</Link> -
                <Link to="/tasks">Tasks</Link> - 
                <Link to="/contact">Contact</Link>

                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/users" component={UserList} exact={true}/>
                <Route path="/users/:id" component={UserShow} />
                <Route path="/contact" component={Contact} />
                */}
            </div>
        </BrowserRouter>    
    )
}

export default App

// function App(){
//     return(
//         <div>
//            <h1> React App- {msg1} {msg2} </h1>
//            <UserList />
//            <Employees />
//            <Tasks />
//            <Register />
//         </div>
//     )
// }

// export default App

// import, export are es6 module loader keywords
// default means we can export only one variable(function component, variable, anything in file)