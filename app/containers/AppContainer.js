import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  StyleSheet,
  View,
  TouchableHighlight, Text,
} from 'react-native';

class AppContainer extends Component {

  constructor(props, context) {
    super(props);
  }
  render() {
   return (
       <View>
         <Text>
          test loremasdjbaskdbasdhb
        </Text>
       </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
