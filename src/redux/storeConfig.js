import {createStore,applyMiddleware,combineReducers} from 'redux'  //1.初始化store函数2.添加我们需要的中间件3.合并多个reducer
import {createLogger} from 'redux-logger' //中间件 能console出每一个action
import thunk from 'redux-thunk'


const logger = createLogger();
const createStoreWith = applyMiddleware(logger,thunk)(createStore);

import App from './reducer'

const reducers = combineReducers({
    App
});

const storeConfig = (initialState)=>createStoreWith(reducers,initialState);
export default storeConfig;