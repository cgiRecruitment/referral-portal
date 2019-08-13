import {
  CREATE_COMMENT,
  CREATE_PROFILE,
  SET_STATS,
  SET_PROFILES,
  UPDATE_PROFILE,
  UPDATE_PROFILE_STORE
} from "../actions/profileActions";
import { APPLY_PAGINATION } from "../actions/paginationActions";
import { constants } from "../utility/constants";
import { FILTER_PROFILES } from "../actions/FilterActions";

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
  },
  paginatedProfiles: [],
  startIndex: 0
};

const getAllButRejectedProfiles = profiles => {
  return profiles.filter(profile => profile.status !== constants.REJECTED);
};

const applyPagination = (activePage, profiles) => {
  return getAllButRejectedProfiles(profiles).slice(
    (activePage - 1) * constants.pageSize,
    constants.pageSize * activePage
  );
};

const applyFiltering = (statusList, profiles) => {
  return (statusList === null || statusList.length === 0)
    ? profiles
    : profiles.filter(
        profile => profile.status && statusList.includes(profile.status)
      );
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.data,
        paginatedProfiles: applyPagination(1, action.data),
        filteredProfiles: applyFiltering(
          null,
          getAllButRejectedProfiles(action.data)
        ),
        activeProfiles: action.data.filter(profile =>
          constants.ACTIVE_PROFILES.includes(profile.status)
        ),
        allButRejectedProfiles: getAllButRejectedProfiles(action.data),
        stats: {
          pieChart: {
            offerProfilesCount: action.data.filter(
              profile => profile.status === constants.OFFER_MADE
            ).length,
            inProgressProfilesCount: action.data.filter(
              profile =>
                constants.ACTIVE_PROFILES.includes(profile.status) &&
                profile.status !== constants.OFFER_MADE
            ).length,
            joinerCount: action.data.filter(
              profile => profile.status === constants.JOINED
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

    case APPLY_PAGINATION:
      return {
        ...state,
        startIndex: action.payload - 1,
        paginatedProfiles: applyPagination(
          action.payload,
          state.filteredProfiles
        )
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

    case FILTER_PROFILES:
      return {
        ...state,
        startIndex: 0,
        filteredProfiles: applyFiltering(
          action.payload,
          state.allButRejectedProfiles
        ),
        paginatedProfiles: applyPagination(
          1,
          applyFiltering(action.payload, state.allButRejectedProfiles)
        )
      };

    case UPDATE_PROFILE_STORE:
        return {
          ...state,
          profiles: state.profiles.map((profile, index) => {
            if(profile.id === action.profile.id) {
              return action.profile;
            }
            return profile;
          }),
          paginatedProfiles: state.paginatedProfiles && state.paginatedProfiles.map((profile,index) => {
            if(profile.id === action.profile.id) {
              return action.profile;
            }
            return profile;
          }),
          filteredProfiles : state.filteredProfiles && state.filteredProfiles.map((profile,index) => {
            if(profile.id === action.profile.id) {
              return action.profile;
            }
            return profile;
          }),
          activeProfiles: state.activeProfiles && state.activeProfiles.map((profile,index) => {
            if(profile.id === action.profile.id) {
              return action.profile;
            }
            return profile;
          })
        };
    

    default: {
      return state;
    }
  }
}

export default profileReducer;
