export const MY_ACTION = "MY_ACTION";

export function myAction() {
  return {
    type: MY_ACTION,
    promise: new Promise((resolve) => {
      resolve("fulfilled");
    }),
  };
}
