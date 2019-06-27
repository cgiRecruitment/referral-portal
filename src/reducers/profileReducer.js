
import {CREATE_COMMENT, CREATE_PROFILE, SET_STATS, SET_PROFILES, UPDATE_PROFILE} from "../actions/profileActions";


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
    }
};

const activeProfile = ["Application Received", "Interview Scheduled", "Offer Made", "On Hold"]

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:

            const activeProfiles = action.data.filter(profile =>
                activeProfile.includes(profile.status));
            const allButRejectedProfiles = action.data.filter(profile => profile.status !== "Rejected CGI");

            return {
                ...state,
                activeProfiles: activeProfiles,
                allButRejectedProfiles: allButRejectedProfiles,
                profiles: action.data,
                stats:{
                    pieChart:{
                        offerProfilesCount: action.data.filter(profile => profile.status == "Offer Made").length,
                        inProgressProfilesCount: action.data.filter(profile =>
                            activeProfile.includes(profile.status) && profile.status != "Offer Made").length,
                        joinerCount: action.data.filter(profile => profile.status == "Joined").length,
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

        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.data
            }

        case CREATE_COMMENT:
            return {
                ...state,
                comment: action.data
            }

        default: {
            return state;
        }
    }
}

export default profileReducer;
