import { combineReducers } from 'redux'

import countReducer from './count/count.reducer'
import sampleDataReducer from './sample-data/sample-data.reducer'

const rootReducer = combineReducers({
    count: countReducer,
    sampleData: sampleDataReducer
})


export default rootReducer