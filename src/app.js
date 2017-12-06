import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import ToDoApp from './components/ToDoApp.js'

import {Provider} from 'react-redux'
import Index from './index'
import storeConfig from './redux/storeConfig'

const store = storeConfig();



ReactDom.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('app')
);