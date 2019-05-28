import {CREATE_PROFILE, setProfiles } from "../actions/profileActions";
import {constants} from "../utility/constants";

const createProfile = store => next => async action => {
  next(action);

  if (action.type !== CREATE_PROFILE) {
    return;
  }

  const dispatch = store.dispatch;

  try {
         let formData = JSON.stringify(this.state);
          const data = await fetch(constants.host+"/candidates/", {
            headers: {
               "Content-Type": "application/json"
            },
            method: "POST",
            body: formData,

          });

    if (data) {
      dispatch(createProfile(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { createProfile };
