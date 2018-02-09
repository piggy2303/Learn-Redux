import React, { Component } from 'react';
import {  View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Com3 from './com3';

class Com2 extends Component {
    
    cong(){
        this.props.dispatch({
            type: "UP",
        })
    }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.cong.bind(this)}>
            <Text>++++++++++</Text>
        </TouchableOpacity>
        
        <Com3/>
      </View>
    );
  }
}

export default connect()(Com2);