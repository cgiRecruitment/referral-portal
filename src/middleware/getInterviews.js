import { GET_INTERVIEWS, setInterviews } from "../actions/interviewActions";
import { constants } from "../utility/constants";

const getInterview = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEWS) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(`${constants.host}/interviews/`).then(data =>
      data.json()
    );

    if (data) {
      dispatch(setInterviews(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterview };
