import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Com1 from './component/com1';
import {Provider} from 'react-redux';

import {createStore} from 'redux';

const defaultState = {
    value: 10,
    deptrai : false,
};

const reducer = (state = defaultState, action) => {
    if (action.type === "UP") {
        return{
            value : state.value +1,
            deptrai : !state.deptrai,
        };
    }
    if(action.type === "DOWN"){
        return{
            value: state.value -1,
            deptrai : !state.deptrai,

        };
    }

    if(action.type === "DOIMAU"){
        return{
            value : state.value,
            deptrai : !state.deptrai,
        }
    }
    return state;
};

const store = createStore(reducer)

export default class DemoRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <Com1/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('testredux', () => DemoRedux);

