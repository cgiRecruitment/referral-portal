import { GET_STATUS_LIST, setStatusList } from "../actions/prefillActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const getStatusList = store => next => async action => {
  next(action);

  if (action.type !== GET_STATUS_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(constants.URLS.STATUS);

    if (res.data) {
      dispatch(setStatusList(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getStatusList };
