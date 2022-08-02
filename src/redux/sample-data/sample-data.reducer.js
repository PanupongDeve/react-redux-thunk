import SampleDataTypes from './sample-data.types'


const INTITIAL_STATE = {
    data: []
}

const sampleDataReducer = (state= INTITIAL_STATE, action) => {
    switch(action.type) {
        case SampleDataTypes.FETCH:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default sampleDataReducer