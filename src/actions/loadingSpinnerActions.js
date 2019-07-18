export const SERVICE_CALL_INTIATED = 'SERVICE_CALL_INTIATED';
export const SERVICE_CALL_COMPLETED = 'SERVICE_CALL_COMPLETED';

export const loadSpinner = () => {
    return {
        type: SERVICE_CALL_INTIATED
    }
};

export const endSpinner = () => {
    return {
        type: SERVICE_CALL_COMPLETED
    }
};