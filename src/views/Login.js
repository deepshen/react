import React from 'react'
import {Form,Icon,Input,Button,Checkbox} from 'antd'
const FormItem = Form.Item;
import './less/Login.less'
class Login extends React.Component{
    componentWillMount() {

    }
    login= ()=>{
        this.props.history.push('/main/list')
    }
    render(){
        return(
            <div id='login'>
                <div className='banner'>

                </div>
                <Form className='login-form'>
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'16px'}} />} placeholder="请输入用户名" />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',fontSize:'16px' }} />} placeholder="请输入密码" type='password'/>
                    </FormItem>
                    <FormItem>
                        <Checkbox>记住我</Checkbox> <br/>
                        <Button type='primary' onClick={this.login}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Login