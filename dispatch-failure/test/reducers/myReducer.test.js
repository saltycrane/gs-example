/*global describe it*/
/*global expect*/
import reducer from "reducers/myReducer";

describe("reducers/myReducer", () => {
  it("returns the initial state", () => {
    const state = void 0;
    expect(
      reducer(state, {})
    ).to.equal(null);
  });
});
