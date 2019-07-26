import { GET_SKILL_SET_LIST, setSkillSetList } from "../actions/prefillActions";
import AxiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const getSkillSetList = store => next => async action => {
  next(action);

  if (action.type !== GET_SKILL_SET_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await AxiosClient.get(constants.URLS.SKILLS);

    if (res.data) {
      dispatch(setSkillSetList(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getSkillSetList };
