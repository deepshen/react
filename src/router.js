import {HashRouter as Router,Route,Link,hashHistory, Switch,Redirect} from 'react-router-dom'
import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout;
import * as RouterCom from './needs'



class IndexRouter extends React.Component{
    render(){
       return(
           <Router history={hashHistory}>
               <Switch>
                       <Route exact path="/login" component={RouterCom.LoginCom}></Route>
                       <Route path="/main" component={RouterCom.MainCom}></Route>
                       <Route component={RouterCom.noMatchCom}></Route>//错误页面
               </Switch>
           </Router>
       )
    }
}
function MainRouter ({match}) {
    return(
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Switch>
                <Route path={`${match.url}/list`} component={RouterCom.ListCom}></Route>
                <Route path={`${match.url}/test`} component={RouterCom.TestCom}></Route>
                <Route path={`${match.url}/chart`} component={RouterCom.ChartCom}></Route>
                <Redirect from={`${match.url}/*`} to='/error'></Redirect> //重定向到错误页面
            </Switch>
        </Content>
    )
}

export {IndexRouter,MainRouter};


