import {createStore,applyMiddleware,combineReducers} from 'redux'; //1.初始化store函数2.用来添加我的中间件3.合并多个reducer
import {createLogger} from 'redux-logger'//一个中间件  可以console.log每一个action方便调试
import toDoApp from './modules/toDoApp' //引入一个reducer

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
    toDoApp
});

const configureStore = (initialState)=>createStoreWithMiddleware(reducer,initialState);
export default configureStore;