// 상대경로를 사용하여 actionTypes를 불러온다 
import * as types from '../actions/ActionTypes';

// reducer의 초기상태를 정한다.
// action을 전달받을건데 초기값이 정의되어 있지 않기때문에 초기값을 지정 ( 상수형태로 작성한다 )
// reducer는 함수다. 
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

// reducer는 함수다. 함수도 내보낼꺼라서 function으로 작성 
// 기본인수(ES6)방법 정의:state가 undefined일 경우 initialState 사용 
export default function counter(state = initialState, action) {
    // if(typeof state === 'undefined'){
    //     return initialState;
    // }

    /* ...  */
    switch(action.type){
        case types.INCREMENT:
            // return { number: state.number + 1 }
            // return { ...state, number: number + 1} // spread 사용
            return { 
                ...state, 
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, u: 0 }
            }
        case types.DECREMENT:
            return { 
                ...state,
                number: state.number - 1 
            }
        default:
            return state;
    }
}