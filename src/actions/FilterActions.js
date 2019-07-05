export const FILTER_PROFILES = "FILTER_PROFILES";

export const filterProfiles = selectedStatusList => {
  return {
    type: FILTER_PROFILES,
    payload: selectedStatusList
  };
};
