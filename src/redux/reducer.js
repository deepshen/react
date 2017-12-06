const initialState = {//默认全局参数
    count:0
};




export default function reducer(state = initialState,action) {
    const count = state.count;
    switch (action.type){
        case 'increase':
            return {count:count+action.value}
        default:
            return state
    }
}