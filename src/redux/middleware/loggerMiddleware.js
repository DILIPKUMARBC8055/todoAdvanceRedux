
const LoggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      console.log("[log]:" + action.type + " " + new Date().toDateString());
      next(action);
      console.log(store.getState());
    };
  };
};
export default LoggerMiddleware;
