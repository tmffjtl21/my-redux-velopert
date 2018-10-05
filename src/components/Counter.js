import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// 여기서 redux에 연결 후 작업 후 하위 컴토넌트에게는 반환된 값만 전달 

class Counter extends Component {

    setRandomColor = () => {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;

        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        }

        return (
            <div style={style}>
                {/* 아래의 두 함수가 없다면 이렇게 사용함 */}
                {/* <Value number={this.props.store.getState().counter.number /> */}

                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>efefefefe
        );
    }
}

// redux state 안에 있는 값을 이 함수로 매핑
// 여기서의 state는 컴포넌트의 state와 다름 
const mapStateToProps = (state) => {

    // 어떠한 props가 여기의 state의 어떤값에 연결이 될지 여기서 정함 
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    
    // action을 dispatch 하는 함수를 연결 
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.setColor(color))}
    }

    // 단점은 이름을 임의로 변경할 수 없음
    //return bindActionCreators(actions, dispatch);
}

// component를 redux에 연결하는 또다른 함수를 반환 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
