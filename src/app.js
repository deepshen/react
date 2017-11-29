import React from 'react'
import ReactDom from 'react-dom'

import ToDoApp from './components/ToDoApp.js'


class App extends React.Component{
    render(){
        return(
           <ToDoApp/>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('app')
);