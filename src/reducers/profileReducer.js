import {
  CREATE_COMMENT,
  CREATE_PROFILE,
  SET_STATS,
  SET_PROFILES,
  UPDATE_PROFILE
} from "../actions/profileActions";
import { constants } from "../utility/constants";

const initialState = {
  profiles: false,
  stats: {
    pieChart: {
      offerProfilesCount: 0,
      inProgressProfilesCount: 0,
      joinerCount: 0
    },
    refChart: {
      referralCount: 0,
      notReferralCount: 0
    },
    barChart: {}
  }
};

const activeProfile = [
  constants.profileStatus.applicationReceived,
  constants.profileStatus.interviewScheduled,
  constants.profileStatus.offerMade,
  constants.profileStatus.onHold
];

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILES:
      const activeProfiles = action.data.filter(profile =>
        activeProfile.includes(profile.status)
      );
      const allButRejectedProfiles = action.data.filter(
        profile => profile.status !== constants.profileStatus.rejected
      );

      return {
        ...state,
        activeProfiles: activeProfiles,
        allButRejectedProfiles: allButRejectedProfiles,
        profiles: action.data,
        stats: {
          pieChart: {
            offerProfilesCount: action.data.filter(
              profile => profile.status == constants.profileStatus.offerMade
            ).length,
            inProgressProfilesCount: action.data.filter(
              profile =>
                activeProfile.includes(profile.status) &&
                profile.status != constants.profileStatus.offerMade
            ).length,
            joinerCount: action.data.filter(
              profile => profile.status == constants.profileStatus.joined
            ).length
          },
          refChart: {
            referralCount: action.data.filter(profile => profile.referred)
              .length,
            notReferralCount: action.data.filter(profile => !profile.referred)
              .length
          },
          barChart: {}
        }
      };

    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.data
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.data
      };

    case CREATE_COMMENT:
      return {
        ...state,
        comment: action.data
      };

    default: {
      return state;
    }
  }
}

export default profileReducer;
