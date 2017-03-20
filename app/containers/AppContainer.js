import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import Album from '../components/Album';

class AppContainer extends Component {

  constructor(props, context) {
    super(props);
  }
  render() {
   return (
       <Album {...this.props}/>
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
