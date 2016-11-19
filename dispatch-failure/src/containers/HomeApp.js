/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import * as actions from "actions/myActions";
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
    const { myAction, myActionRejects, myAction2, myActionRejects2, result } = this.props;

    return (
      <div>
        <Helmet title="Home"/>
        <p>Use original promise middleware:</p>
        <button onClick={() => myAction()}>Promise fulfills</button>
        <button onClick={() => myActionRejects()}>Promise rejects</button>
        <button onClick={() => myAction(true)}>Promise fulfills (bug in code)</button>

        <p>Use alternative promise middleware:</p>
        <button onClick={() => myAction2()}>Promise fulfills</button>
        <button onClick={() => myActionRejects2()}>Promise rejects</button>
        <button onClick={() => myAction2(true)}>Promise fulfills (bug in code)</button>

        <p>result: {result}</p>
      </div>
    );
  }
}

export default connect(
  (state) => ({result: state.myReducer}),
  (dispatch) => bindActionCreators(actions, dispatch)
)(HomeApp);

