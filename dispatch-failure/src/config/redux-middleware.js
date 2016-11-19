// Gluestick has already included thunk and a custom Promise middleware; any
// middleware added here will be added after those.
//
// Example:
// import createLogger from 'redux-logger';
// const logger = createLogger();
// export default [logger];

function promiseMiddlewareFork(client) {
  // eslint-disable-next-line no-unused-vars
  return ({dispatch, getState}) => {
    return next => action => {
      const { promise2, type, ...rest } = action;

      if (!promise2) {
        return next(action);
      }

      const SUCCESS = type;
      const INIT = type + "_INIT";
      const FAILURE = type + "_FAILURE";

      next({...rest, type: INIT});

      let getPromise;
      if (typeof promise2 === "function") {
        getPromise = promise2;
      }
      else {
        getPromise = () => {
          return promise2;
        };
      }

      // // original
      // return getPromise(client)
      //   .then(value => {
      //     next({...rest, value, type: SUCCESS});
      //     return value || true;
      //   })
      //   .catch(error => {
      //     next({...rest, error, type: FAILURE});
      //     return false;
      //   });

      // alternative
      return getPromise(client)
        .then(
          value => {
            next({...rest, value, type: SUCCESS});
            return value || true;
          },
          error => {
            next({...rest, error, type: FAILURE});
            return false;
          }
        );
    };
  };
}

export default [promiseMiddlewareFork(null)];
