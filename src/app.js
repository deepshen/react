import React from 'react'
import ReactDom from 'react-dom'

// import ToDoApp from './components/ToDoApp.js'
import {Provider} from 'react-redux'
import ToDoAppContainer from './containers/toDoAppContainer'
import configureStore from './redux/configureStore'

const store = configureStore();
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ToDoAppContainer />
            </Provider>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('app')
);