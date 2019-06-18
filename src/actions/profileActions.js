import { SET_STATUS_LIST } from "./prefillActions";

export const SET_PROFILES = "SET_PROFILES";
export const GET_PROFILES = "GET_PROFILES";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const SET_STATS = "SET_STATS";

export const setProfiles = data => {
    return {
        type: SET_PROFILES,
        data
    };
};

export const getProfiles = () => {
    return {
        type: GET_PROFILES
    };
};

export const createProfile = profile => {
    return {
        type: CREATE_PROFILE,
        profile
    };
};

export const calculateStats = data =>{
    return{
        type : SET_STATUS_LIST,
        data
    }
}