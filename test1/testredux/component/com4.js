import React, { Component } from 'react';
import {  View, Text, TouchableOpacity} from 'react-native';

import {connect} from "react-redux";

class Com4 extends Component {
    changecolor(){
        this.props.dispatch({
            type : "DOIMAU"
        })
    }

  render() {
    return (
      <View>
       <TouchableOpacity onPress={this.changecolor.bind(this)}>
            <Text>chang color</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect ()(Com4);