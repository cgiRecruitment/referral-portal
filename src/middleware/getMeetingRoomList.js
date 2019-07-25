import {
  GET_MEETING_ROOM_LIST,
  setMeetingRoomList
} from "../actions/prefillActions";
import axiosClient from "../AxiosClient";

const getMeetinRoomList = store => next => async action => {
  next(action);

  if (action.type !== GET_MEETING_ROOM_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(`/interviews/locations`);

    if (res.data) {
      dispatch(setMeetingRoomList(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getMeetinRoomList };
