/* @flow */
import React, { Component } from "react";

/**
 * Removed the `async` keyword and it works better than without it
 * Actual error on line 29
 * Reported error on line 19
 */
export class SourceMapWorks2 extends Component {
  constructor(props:Object) {
    super(props);
    (this:any).handleClick = this.handleClick.bind(this);
  }

  render() {
    return <button onClick={this.handleClick}>SourceMapWorks2 (sort of)</button>;
  }

  handleClick() {
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
