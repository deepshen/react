import {HashRouter as Router,Route,Link,hashHistory, Switch} from 'react-router-dom'
import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout;
import * as RouterCom from './needs'



class IndexRouter extends React.Component{
    render(){
       return(
           <Router history={hashHistory}>
               <Switch>
                       <Route exact path="/" component={RouterCom.LoginCom}></Route>
                       <Route path="/main" component={RouterCom.MainCom}></Route>
                       <Route component={RouterCom.noMatchCom}></Route>
               </Switch>
           </Router>
       )
    }
}
function MainRouter ({match}) {
    return(
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Route path={`${match.url}/list`} component={RouterCom.ListCom}></Route>
            <Route path={`${match.url}/test`} component={RouterCom.TestCom}></Route>
            <Route path={`${match.url}/chart`} component={RouterCom.ChartCom}></Route>
        </Content>
    )
}

export {IndexRouter,MainRouter};


