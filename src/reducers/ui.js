// 여기서 배경화면 색깔을 담당
import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
}

export default function ui(state = initialState, action){
    if(action.type === types.SET_COLOR){
        // 새로운 객체를 만들어서 리턴
        return {
            color: action.color
        };
    }else{
        return state;
    }
}