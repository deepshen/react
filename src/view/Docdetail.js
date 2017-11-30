import React from 'react'
import api from '../server'

class Docdetail extends React.Component{
    componentWillMount() {
        //获取理由参数
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id;
        api.doctorclinic({rid:id}).then(function (res) {
            if(res.code === '000'){
                console.log(res);
            }
        })
    }
    render(){
        return(
            <div>
                医生详情
            </div>
        )
    }
}

export default Docdetail