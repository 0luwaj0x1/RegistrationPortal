import request from '../apis/backendRequests';



export const checkVin = (formValues) => {
    return async (dispatch) => {
        dispatch(switchLoading(true));
        const response = await request.post('/vin/check', formValues);
        dispatch({type: 'check_vin', payload: response.data});
        dispatch(switchLoading(false));
    }
};

export const switchLoading = (loadingStatus) => {
    return {
        type: 'switch_loading',
        payload: loadingStatus
    }
};
