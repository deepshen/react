import React from 'react'
import api from '../server'
import {connect} from 'react-redux'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            doclist:[]
        }
    }
    componentWillMount() {
        var _this = this;
        // api.getfreedoclist({}).then(function (res) {
        //     if(res.code === '000'){
        //         console.log(JSON.parse(res.data));
        //         _this.setState({
        //             doclist:JSON.parse(res.data)
        //         })
        //     }
        // })
    }
    docdetail= (rid,e)=>{
        location.href='#/docdetail/'+rid
    }

    render(){
        const {count} = this.props;
        return (
            <div>
                {/*{this.state.doclist.map((item=>*/}
                        {/*<p key={item.rid} onClick={this.docdetail.bind(this,item.rid)}>{item.name}</p>*/}
                {/*))}*/}
                {count}
                <button className='btn'>测试</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {count:state.App.count}
}
function mapDispatchToProps(dispatch) {
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)