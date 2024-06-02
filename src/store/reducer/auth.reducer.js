const initialStore = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};
export const authReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "process": {
      return (store = {
        loading: true,
        ...store,
      });
    }
    case "error": {
      return (store = {
        loading: false,
        error: action.payload,
        ...store,
      });
    }
    case "login": {
      return (store = {
        auth: true,
        data: action.payload,
        loading: true,
        error: null,
      });
    }
    case "register": {
      return (store = {
        auth: true,
        data: action.payload,
        loading: true,
        error: null,
      });
    }
    case "logout": {
      return (store = { auth: false, data: null });
    }

    default:
      return store;
  }
};
