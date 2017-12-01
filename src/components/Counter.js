import React from 'react'

class Counter extends React.Component{
    componentWillMount() {

    }
    render(){
        const {value ,onIncreaseClick} = this.props; //1组件定义发送
        return(
            <div>
                <span>展示的值：{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={this.ceshi}>测试全局组件</button>
            </div>
        )
    }
    ceshi=()=>{
        console.log(this)
    }

}
export default Counter