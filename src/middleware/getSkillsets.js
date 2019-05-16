import { GET_SKILL_SET_LIST, setSkillSetList } from "../actions/prefillActions";
import {constants} from "../utility/constants";

const getSkillSetList = store => next => async action => {
  next(action);

  if (action.type !== GET_SKILL_SET_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(constants.host+"/candidates/skills")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setSkillSetList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getSkillSetList };
