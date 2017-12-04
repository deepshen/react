import React from 'react'
import {connect} from 'react-redux'
import './Login.less'
import {Button} from 'antd'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:'',
            count:this.props.count
        }
    }

    onChangeUser=(e)=>{
        var value = e.target.value;
        this.setState({
            user:value
        })
    }
    onChangePass=(e)=>{
        var value = e.target.value;
        this.setState({
            password:value
        })
    };
    subMit = ()=> {
        if(this.state.user == 'liuwei' && this.state.password == '123456'){
            this.props.history.push('/home');
            // location.href = '#/home'
        }
    };
    ceshi = ()=>{
        const {dispatch} = this.props;
        dispatch(increase)
    }
    render(){
        const {count,onIncreaseClick} = this.props;
        return(
            <div id='login'>
                <div className='list'>用户名：<input type="text" onChange={this.onChangeUser} placeholder='请输入用户名' value={this.state.user}/></div>
                <div className='list'>密&emsp;码：<input type="password" onChange={this.onChangePass} placeholder='请输入密码' value={this.state.password}/></div>
                <Button className='btn' onClick={this.subMit}>登录</Button>
                <br/>
                {count}
                <Button className='btn' onClick={onIncreaseClick.bind(this,89)}>增加</Button>
                <Button>hello world</Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {count:state.App.count}
}
function mapDispatchToProps(dispatch) {
    return{
        onIncreaseClick:(value,e)=>dispatch({type:'increase',value:value})//带参数的dispatch
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)