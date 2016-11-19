/* @flow */
import { MY_ACTION } from "actions/myActions";

const INITIAL_STATE = null;

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case MY_ACTION:
      throw "bug in my code";
      return "success";

    case `${MY_ACTION}_FAILURE`:
      return "failure";

    default:
      return state;
  }
};

