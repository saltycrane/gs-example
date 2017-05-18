/* @flow */
import React, { Component } from "react";

/**
 * Source map broken due to a combination of named `export`, `async`, and nested destructuring
 * Actual error on line 29
 * Reported error on line 9
 */
export class SourceMapBroken extends Component {
  constructor(props:Object) {
    super(props);
    (this:any).handleClick = this.handleClick.bind(this);
  }

  render() {
    return <button onClick={this.handleClick}>SourceMapBroken</button>;
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
