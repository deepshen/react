import {connect} from 'react-redux'
import toDoApp from '../components/ToDoApp'
import {inputchange} from "../redux/modules/toDoApp";


function mapStateToProps(state) {
    return {
        toDoApp:state.toDoApp
    }
}
function mapDispatchToProps(dispatch) {
    return{
        inputchange:(value)=>dispatch(inputchange(value))
    }
}

export default connect( //这个被调用2次，第一次是2个毁掉函数既mapStateToProps和MapDispatchToProps;第二次把state dipatch传入组件
    mapStateToProps,
    mapDispatchToProps
)(toDoApp);