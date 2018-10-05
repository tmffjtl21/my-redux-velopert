import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import reducers from './reducers'
// import * as actions from './actions';

import { Provider } from 'react-redux';


const store = createStore(reducers);
// store가 하는일 
// 1. dispatch(action) 액션을 리듀서로 보낸다.
// 2. getState() 현재 상태를 반환
// 3. subscribe(listener) 상태가 바뀔때마다 실행할 함수를 등록 listener가 콜백으로 실행됨
// 4. replaceReducer(nextReducer) hot reloading과 코드분할에서 사용 ( 여기서는 사용 X )
// console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

// // 위의 내용에서 더이상 알림을 받기싫을 경우에는 unsubscribe()
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(actions.increment());
// store.dispatch(actions.increment());ㄷㅈㅈㅈㅈㅈㅈㅈㄷ

// unsubscribe();  // 상태 변경 시 실행할 함수를 해제 

// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200,200,200]));ㄷㄹㄷㄹㄷㄹ
// store.dispatch(actions.setColor([210,210,210]));
ㄷㄹㄷㄹㄷㄹ


// 여기서 store를 바로 props를 넘겨줘서 사용할 수 있지만 구조가 복잡해지므로 
// react-redux라는 view binding 도구를 사용함 .
ReactDOM.render(ㄷㄹㄷㄹㄷㄹㄷㄹㄷㄹㄷ
    <Provider store={store} > 
        <App />
    </Provider>, 
    document.getElementById('root')
);

// connect([..options])
// 컴포넌트를 Redux에 연결하는 또다른 함수를 반환함 