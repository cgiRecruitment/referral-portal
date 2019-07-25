import { LOGIN_USER, loginLogoutStatus } from "../actions/userActions";
import { setGeneralError } from "../actions/errorActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const loginUser = store => next => async action => {
  next(action);

  if (action.type !== LOGIN_USER) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const config = {
      method: 'post',
      url: constants.URLS.LOGIN,
      headers: { 'Content-Type': 'application/json' },
      data : JSON.stringify(action.user)
  }

    const res = await axiosClient(config);
    
    if (res.data) {
      if (res.data.loginStatus) {
        sessionStorage.setItem("referralPortal-loginStatus", res.data.loginStatus);
        sessionStorage.setItem("memberId", res.data.memberId);
        sessionStorage.setItem("memberName", res.data.memberName);
        sessionStorage.setItem("authToken", res.headers['auth-token']);
        window.location = "/";
      } else {
        dispatch(setGeneralError(res.data.comment));
      }
      dispatch(loginLogoutStatus(res.data.loginStatus));
    }
  } catch (e) {
    console.error(e);
  }
};

export { loginUser };
