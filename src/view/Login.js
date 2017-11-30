import React from 'react'
import './Login.less'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:''
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
            location.href = '#/home'
        }
    };
    render(){
        return(
            <div id='login'>
                <div className='list'>用户名：<input type="text" onChange={this.onChangeUser} placeholder='请输入用户名' value={this.state.user}/></div>
                <div className='list'>密&emsp;码：<input type="password" onChange={this.onChangePass} placeholder='请输入密码' value={this.state.password}/></div>
                <button className='btn' onClick={this.subMit}>登录</button>
            </div>
        )
    }
}
export default Login