const defaultState = {
    focused:false
};

export default (state = defaultState,action)=>{
    if(action.type === 'input_focus'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = true
        return newState
    }
    if(action.type === 'input_blur'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = false
        return newState
    }
    return state
}