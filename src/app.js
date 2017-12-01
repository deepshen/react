import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import ToDoApp from './components/ToDoApp.js'

import {Provider} from 'react-redux'
import App from './view/Main'
import storeConfig from './redux/storeConfig'

const store = storeConfig();



ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);