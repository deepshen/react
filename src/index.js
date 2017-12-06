import {HashRouter as Router,Route,Link,hashHistory, Switch} from 'react-router-dom'
import React from 'react'

import './index.less'
import Login from './views/Login'
import Main from './views/Main'
import noMatch from './views/noMatch'

class Index extends React.Component{
    componentWillMount() {

    }
    render(){
       return(
           <Router history={hashHistory}>
               <div id='index'>
                   <Switch>
                       <Route exact path="/" component={Login}></Route>
                       <Route path="/main" component={Main}></Route>
                       <Route component={noMatch}></Route>
                   </Switch>
               </div>
           </Router>
       )
    }
}

export default Index


