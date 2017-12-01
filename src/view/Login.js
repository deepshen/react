import React from 'react'
import {connect} from 'react-redux'
import './Login.less'
import {increase} from '../redux/reducer'
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
    ceshi = ()=>{
        const {dispatch} = this.props;
        dispatch(increase)
    }
    render(){
        console.log(this.props);
        const {count,onIncreaseClick} = this.props;
        return(
            <div id='login'>
                <div className='list'>用户名：<input type="text" onChange={this.onChangeUser} placeholder='请输入用户名' value={this.state.user}/></div>
                <div className='list'>密&emsp;码：<input type="password" onChange={this.onChangePass} placeholder='请输入密码' value={this.state.password}/></div>
                <button className='btn' onClick={this.subMit}>登录</button>
                <br/>
                {count}
                <button className='btn' onClick={onIncreaseClick}>增加</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {count:state.App.count}
}
function mapDispatchToProps(dispatch) {
    return{
        onIncreaseClick:()=>dispatch({type:'increase'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)