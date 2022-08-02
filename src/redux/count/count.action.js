import countTypes from './count.types'

export const increate = (count) => {
    count++
    return {
        type: countTypes.INCREATE,
        payload: count
    }
}


export const decreate = (count) => {
    count--
    return {
        type: countTypes.DECREATE,
        payload: count
    }
}

