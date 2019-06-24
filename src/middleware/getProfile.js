
import { GET_PROFILES, setProfiles } from "../actions/profileActions";
import {constants} from "../utility/constants";

const getProfile = store => next => async action => {
  next(action);

  if (action.type !== GET_PROFILES) {
    return;
  }

  const dispatch = store.dispatch;
  let name = "test";
  console.log(`${name} welcomes`);

  try {
    // eslint-disable-next-line no-template-curly-in-string
    const data = await fetch(`${constants.host}/candidates/`)
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setProfiles(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getProfile };
