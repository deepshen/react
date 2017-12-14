import React from 'react'
import Bundle from './bundle'
import Login from 'bundle-loader?lazy!./views/Login'
import Main from 'bundle-loader?lazy!./views/Main'
import noMatch from 'bundle-loader?lazy!./views/noMatch'
import List from "bundle-loader?lazy!./views/List"
import Test from 'bundle-loader?lazy!./views/Test'
import Chart from 'bundle-loader?lazy!./views/Chart'



export const LoginCom = (props)=>(
    <Bundle load={Login}>
        {(Container)=><Container {...props}/>}
    </Bundle>
);
export const MainCom = (props)=>(
    <Bundle load={Main}>
        {(Container)=><Container {...props}/>}
    </Bundle>
);
export const noMatchCom = (props)=>(
    <Bundle load={noMatch}>
        {(Container)=><Container {...props}/>}
    </Bundle>
);
export const ListCom = (props)=>(
    <Bundle load={List}>
        {(Container)=><Container {...props}/>}
    </Bundle>
);
export const TestCom = (props)=>(
    <Bundle load={Test}>
        {(Container)=><Container {...props}/>}
    </Bundle>
);
export const ChartCom = (props)=>(
    <Bundle load={Chart}>
        {(Container)=><Container {...props}/>}
    </Bundle>
)