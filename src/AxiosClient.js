import { constants } from "./utility/constants";
import axios from "axios";
import { logout } from "./actions/userActions";
//import store from "./store";
import { setGeneralError } from "./actions/errorActions";

const instance = axios.create({
  baseURL: constants.host
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem(constants.AUTH_TOKEN);
  if (token) {
    config.headers[constants.AUTH_TOKEN] = token;
  }
  return config;
});

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (401 === error.response.status) {
      //store.dispatch(setGeneralError(constants.SESSION_EXPIRED));
      //store.dispatch(logout());
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
