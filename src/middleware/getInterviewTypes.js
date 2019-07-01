import {
  GET_INTERVIEW_TYPE_LIST,
  setInterviewTypeList
} from "../actions/prefillActions";
import { constants } from "../utility/constants";

const getInterviewTypes = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEW_TYPE_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(`${constants.host}/interviews/types`).then(data =>
      data.json()
    );

    if (data) {
      dispatch(setInterviewTypeList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterviewTypes };
