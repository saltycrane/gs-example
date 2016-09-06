export function myAction() {
  return {
    type: "MY_ACTION",
    // promise: Promise.resolve("fulfilled."),
    promise: Promise.reject("rejected."),
  };
}
