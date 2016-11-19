/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { myAction } from "actions/myActions";
import Home from "components/Home";

export class HomeApp extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  render () {
    const { myAction, result } = this.props;

    return (
      <div>
        <Helmet title="Home"/>
        <button onClick={() => myAction()}>Dispatch action</button>
        <p>result: {result}</p>
      </div>
    );
  }
}

export default connect(
  (state) => ({result: state.myReducer}),
  (dispatch) => bindActionCreators({myAction}, dispatch)
)(HomeApp);

