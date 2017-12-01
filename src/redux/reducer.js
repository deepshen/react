const initialState = {
    count:0
};

const increaseType = {type:'increase'}
export function increase() {
    return increaseType
}


export default function reducer(state = initialState,action) {
    const count = state.count;
    switch (action.type){
        case 'increase':
            return {count:count+1}
        default:
            return state
    }
}