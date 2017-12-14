import React from 'react'
import {connect} from 'react-redux'
import {Layout,Menu,Breadcrumb,Icon,Input,Avatar} from 'antd'
import {Link} from 'react-router-dom'
const {SubMenu} = Menu;
const {Header,Content,Sider} = Layout
import './less/Main.less'

import {MainRouter} from '../router'



class Main extends React.Component{
    componentWillMount() {
        this.setState({
            collapsed: false,
            pathname:this.props.location.pathname,
        })
    }

    componentDidUpdate() {

    }
    // state = {
    //     collapsed: false,
    //     pathname:this.props.location.pathname
    // };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){
        const {match} = this.props;
        return(
           <Layout id='main'>
                <Header className='header'>
                    <Input.Search placeholder='请输入您要搜索的' style={{width:'200px'}} onSearch={value => console.log(value)}>
                    </Input.Search>
                    <Avatar style={{background:'red'}} className='user-head'></Avatar>
                </Header>
                <Layout id='footBox'>
                    <Sider width={200}
                           collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}
                    >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.pathname]}   collapsed={this.state.collapsed}>
                            <Menu.Item key="/main/list">
                                <Link to='/main/list'>
                                    <Icon type="user" />
                                    <span>nav 1</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/main/test">
                                <Link to='/main/test'>
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/main/chart">
                                <Link to='/main/chart'>
                                    <Icon type="upload" />
                                    <span>图表</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                        {/*<Menu*/}
                            {/*theme='dark'*/}
                            {/*mode="inline"*/}
                            {/*defaultSelectedKeys={['1']}*/}
                            {/*defaultOpenKeys={['sub1']}*/}
                            {/*style={{ height: '100%', borderRight: 0}}*/}
                        {/*>*/}
                            {/*<SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>*/}
                                {/*<Menu.Item key="1">option1</Menu.Item>*/}
                                {/*<Menu.Item key="2">option2</Menu.Item>*/}
                                {/*<Menu.Item key="3">option3</Menu.Item>*/}
                                {/*<Menu.Item key="4">option4</Menu.Item>*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>*/}
                                {/*<Menu.Item key="5">option5</Menu.Item>*/}
                                {/*<Menu.Item key="6">option6</Menu.Item>*/}
                                {/*<Menu.Item key="7">option7</Menu.Item>*/}
                                {/*<Menu.Item key="8">option8</Menu.Item>*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>*/}
                                {/*<Menu.Item key="9">option9</Menu.Item>*/}
                                {/*<Menu.Item key="10">option10</Menu.Item>*/}
                                {/*<Menu.Item key="11">option11</Menu.Item>*/}
                                {/*<Menu.Item key="12">option12</Menu.Item>*/}
                            {/*</SubMenu>*/}
                        {/*</Menu>*/}
                    </Sider>
                    <MainRouter match={match}></MainRouter>
                </Layout>
           </Layout>
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
export default connect(mapStateToProps,mapDispatchToProps)(Main)