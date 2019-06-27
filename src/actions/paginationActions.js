export const APPLY_PAGINATION = "APPLY_PAGINATION";

export const applyPagination = pageNumber => {
  return {
    type: APPLY_PAGINATION,
    payload: pageNumber
  };
};
