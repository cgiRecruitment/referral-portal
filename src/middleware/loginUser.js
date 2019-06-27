import { LOGIN_USER, loginLogoutStatus } from "../actions/userActions";
import { setGeneralError } from "../actions/errorActions";
import {constants} from "../utility/constants";

const loginUser = store => next => async action => {
  next(action);

  if (action.type !== LOGIN_USER) {
    return;
  }

  const dispatch = store.dispatch;

  try {

    const data = await fetch(`${constants.host}/login/`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(action.user),
    })
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      if (data.loginStatus) {
        sessionStorage.setItem("referralPortal-loginStatus", data.loginStatus);
        sessionStorage.setItem("memberId", data.memberId);
        sessionStorage.setItem("memberName", data.memberName);
        window.location = "/";
      }else {
        dispatch(setGeneralError(data.comment))
      }
      dispatch(loginLogoutStatus(data.loginStatus));
    }
  } catch (e) {
    console.error(e);
  }
};

export { loginUser };
