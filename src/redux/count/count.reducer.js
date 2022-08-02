import countTypes from './count.types'


const INTITIAL_STATE = 0

const countReducer = (state= INTITIAL_STATE, action) => {
    switch(action.type) {
        case countTypes.INCREATE:
            return action.payload;
        case countTypes.DECREATE:
            return action.payload;
        default:
            return state;
    }
}

export default countReducer