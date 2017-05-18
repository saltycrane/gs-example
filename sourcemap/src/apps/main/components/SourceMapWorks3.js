/* @flow */
import React, { Component } from "react";

/**
 * Removed the `dataType` sibling and it works
 * Actual error on line 28
 * Reported error on line 28
 */
export class SourceMapWorks3 extends Component {
  constructor(props:Object) {
    super(props);
    (this:any).handleClick = this.handleClick.bind(this);
  }

  render() {
    return <button onClick={this.handleClick}>SourceMapWorks3</button>;
  }

  async handleClick() {
    const props = {
      editorData: {
        dataType: "asdf"
      }
    };
    const {
      editorData: {
        selectedValues: {
          something
        }
      }
    } = props;
  }
}
