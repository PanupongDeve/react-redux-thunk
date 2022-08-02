import axios from 'axios'
import SampleDataTypes from './sample-data.types'


export const fetchData = (externalValue) => async (dispatch, getState) => {
    console.log('externalValue', externalValue)
    console.log('State', getState())
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log('data', data.data)

    dispatch({
        type: SampleDataTypes.FETCH,
        payload: data.data
    })
}
