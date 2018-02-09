import React, { Component } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import Com4 from './com4';


class Com3 extends Component {
    tru(){
        this.props.dispatch({
            type: "DOWN",
        })
    }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.tru.bind(this)}>
            <Text>----------</Text>
        </TouchableOpacity>

        <Com4/>
      </View>
    );
  }
}
export default connect()(Com3);