import { GET_MEETING_ROOM_LIST, setMeetingRoomList } from "../actions/prefillActions";
import {constants} from "../utility/constants";


const getMeetinRoomList = store => next => async action => {
  next(action);

  if (action.type !== GET_MEETING_ROOM_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(constants.host+"/interviews/locations")
      .then(data => data.json())
      .then(response => {
        return response;
      });

    if (data) {
      dispatch(setMeetingRoomList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getMeetinRoomList };
