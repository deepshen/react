//一个简单的reducer
const initialState = {
    list:[{item:'test',done:false}],
    newTodo:'123'
};
const INPUT_CHANGED='INPUT_CHANGED';
export function inputchange(newToDo) {
    return{
        type:INPUT_CHANGED,
        newToDo
    }
}


export default function reducer(state=initialState, action) { //一个reducer返回
    switch (action.type){
        case INPUT_CHANGED:
            return Object.assign({},state,{newTodo:action.value})
        default:
            return state
    }
}