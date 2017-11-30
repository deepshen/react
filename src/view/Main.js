import {HashRouter as Router,Route,Link} from 'react-router-dom'
import React from 'react'
import './Main.less'

import Home from './Home'
import About from './About'
import Login from './Login'
import DocDetail from './Docdetail'

class App extends React.Component{
    componentWillMount() {
        (function calcHtmlFontSize() {
            let width = document.body.clientWidth;
            if(width < 320) width = 320;
            else if(width > 750) width = 750;
            document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
            window.onresize = function () {
                let width = document.body.clientWidth;
                if(width < 320) width = 320;
                else if(width > 750) width = 750;
                document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
            };
        })();
    }
    render(){
        return(
            <Router>
                <div id='main'>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/docdetail/:id" component={DocDetail}/>
                </div>
            </Router>
        )
    }
}
export default App