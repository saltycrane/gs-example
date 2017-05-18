/* @flow */
import React, { Component } from "react";

/**
 * Change `export` to `export default` and it works
 * Actual error on line 29
 * Reported error on line 32
 */
export default class SourceMapWorks1 extends Component {
  constructor(props:Object) {
    super(props);
    (this:any).handleClick = this.handleClick.bind(this);
  }

  render() {
    return <button onClick={this.handleClick}>SourceMapWorks1</button>;
  }

  async handleClick() {
    const props = {
      editorData: {
        dataType: "asdf"
      }
    };
    const {
      editorData: {
        dataType,
        selectedValues: {
          something
        }
      }
    } = props;
  }
}
