import {HashRouter as Router,Route,Link,hashHistory} from 'react-router-dom'
import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout
import List from "./List";
import Test from './Test'
import Chart from './Chart'
export default function ({match}) {
    return(
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Route path={`${match.url}/list`} component={List}></Route>
            <Route path={`${match.url}/test`} component={Test}></Route>
            <Route path={`${match.url}/chart`} component={Chart}></Route>
        </Content>

    )
}