import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { connect} from 'react-redux';

import Com2 from "./com2";

class Com1 extends Component {
  render() {

    const color = this.props.mydeptrai ? 'yellow' : "red";

    return (
      <View>
        <Text style={{fontSize: 40, color }}>Demo</Text>
        <Text> {this.props.myValue} </Text>
        <Com2/>
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        myValue : state.value,
        mydeptrai : state.deptrai,
    };
}

export default connect(mapStateToProps)(Com1);