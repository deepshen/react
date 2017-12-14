import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import {IndexRouter}  from './router'
import storeConfig from './redux/storeConfig'

import './index.less'
const store = storeConfig();



ReactDom.render(
    <Provider store={store}>
        <IndexRouter/>
    </Provider>,
    document.getElementById('app')
);