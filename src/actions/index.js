/**
 * 액션 생성자
 */
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function setColor(color){
    return {
        type: types.SET_COLOR,
        color: color
    }
}


eqfqefqefqe