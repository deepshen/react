import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import ToDoApp from './components/ToDoApp.js'

import App from './view/Main'



ReactDom.render(
    <App/>,
    document.getElementById('app')
);