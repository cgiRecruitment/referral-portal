import {CREATE_PROFILE, SET_PROFILES, SET_STATS} from "../actions/profileActions";
import {APPLY_PAGINATION} from "../actions/paginationActions";
import {constants} from "../utility/constants";

const initialState = {
    profiles: false,
    stats: {
        pieChart:{                
            offerProfilesCount: 0,
            inProgressProfilesCount: 0,
            joinerCount: 0,
          },
        refChart:{
            referralCount : 0,
            notReferralCount : 0
         },
        barChart:{

         }
    },
    paginatedProfiles:[],
    startIndex:0
};

const getAllButRejectedProfiles = profiles => {
    return profiles.filter(profile => profile.status !== constants.REJECTED);
}

const applyPagination = (activePage, profiles) => {
    return getAllButRejectedProfiles(profiles).slice((activePage-1) * constants.pageSize,
       (constants.pageSize * activePage))
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:
        return {
            ...state,
            profiles: action.data,
            paginatedProfiles : applyPagination(1,action.data),
            activeProfiles: action.data.filter(profile =>
                constants.ACTIVE_PROFILES.includes(profile.status)),
            allButRejectedProfiles: getAllButRejectedProfiles(action.data),
            stats:{
              pieChart:{                
                offerProfilesCount: action.data.filter(profile => profile.status === constants.OFFER_MADE).length,
                inProgressProfilesCount: action.data.filter(profile =>
                    constants.ACTIVE_PROFILES.includes(profile.status) && profile.status !== constants.OFFER_MADE).length,
                joinerCount: action.data.filter(profile => profile.status === constants.JOINED).length,
              },
              refChart:{
                referralCount : action.data.filter(profile => profile.referred).length,
                notReferralCount : action.data.filter(profile => !profile.referred).length
              },
              barChart:{
                
              }
            }
          }

        case CREATE_PROFILE:
            return {
                ...state,
                profile: action.data
            }

        case APPLY_PAGINATION:
             return {
                ...state,
                startIndex:(action.payload)-1,
                paginatedProfiles : applyPagination(action.payload,state.profiles)
            }

        default: {
            return state;
        }
    }
}

export default profileReducer;