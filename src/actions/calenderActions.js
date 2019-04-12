export const STORE_AVAILABILITY_OVERVIEW = "STORE_AVAILABILITY_OVERVIEW";
export const GET_AVAILABILITY_OVERVIEW = "GET_AVAILABILITY_OVERVIEW";

export const storeAvailabilityOverview = (data) => {
    return {
        type: STORE_AVAILABILITY_OVERVIEW,
        data
    }
}

export const getAvailabilityOverview= () => {
    return {
        type: GET_AVAILABILITY_OVERVIEW
    }
}
