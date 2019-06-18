import {CREATE_PROFILE, SET_PROFILES, SET_STATS} from "../actions/profileActions";

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
        return {
            ...state,
            profiles: action.data,
            activeProfiles: action.data.filter(profile =>
                activeProfile.includes(profile.status)),
            allButRejectedProfiles: action.data.filter(profile => profile.status != "Rejected"),
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

        // case SET_STATS:
        //     return {
        //         ...state,
        //         stats:data.reduce((stats, c) => {
        //             var status = c.status;
        //             if (!stats.hasOwnProperty(status)) {
        //               stats[status] = 0;
        //             }
        //             stats[status]++;
        //             return stats;
        //           }, {});
        //     }
        default: {
            return state;
        }
    }
}

export default profileReducer;
