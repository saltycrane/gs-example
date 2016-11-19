export const MY_ACTION = "MY_ACTION";

export function myAction(bug) {
  return {
    type: MY_ACTION,
    bug: bug,
    promise: new Promise((resolve) => {
      resolve("fulfilled");
    }),
  };
}

export function myActionRejects() {
  return {
    type: MY_ACTION,
    promise: new Promise((resolve, reject) => {
      reject("rejected")
    }),
  };
}

export function myAction2(bug) {
  return {
    type: MY_ACTION,
    bug: bug,
    promise2: new Promise((resolve) => {
      resolve("fulfilled");
    }),
  };
}

export function myActionRejects2() {
  return {
    type: MY_ACTION,
    promise2: new Promise((resolve, reject) => {
      reject("rejected")
    }),
  };
}
