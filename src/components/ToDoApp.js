import React from 'react'
import List from './List'
import Input from './Input'


class ToDoApp extends React.Component{
    componentWillMount(){
     this.setState({
         list:['thing1','things2','things3'],
         newTodo:'test'
     })
    }
    onInputChange=(event)=>{//input双向值
        this.setState({
            newTodo:event.target.value
        })
    }
    onInputSubmit=(event)=>{//提交新增
        event.preventDefault();
        this.setState((previousState)=>({
            list:[...previousState.list,previousState.newTodo],
            newTodo:''
        }))
    }
    DeleteItem = (i)=>{
        this.setState((previousState)=>({
            list:[...previousState.list.splice(0,i),...previousState.list.slice(i+1)]
        }))
    }
    onListItemClick = (i) => {
        this.setState((previousState)=>({
            list:[...previousState.list.splice(0,i),Object.assign({},previousState.list[i],{done:!previousState.list[i].done}),...previousState.list.slice(i+1)]
        }))
    }
    render(){
        console.log(this.props);
        return(
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <hr/>
                            <List listItems={this.state.list} deleteItem={this.DeleteItem}/>
                        </div>
                    </div>
                </div>
                <Input onchange={this.props.inputchange} onsubmit={this.onInputSubmit} value={this.props.toDoApp.newTodo}/>
            </div>
        )
    }
}

export default ToDoApp