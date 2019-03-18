import { ADD,SUB } from './type.js'

export default (state = 0, action) => {
    switch(action.type){
        case ADD:
            return ++state;
        case SUB:
            return --state;
        default: 
            return 10
    }
}