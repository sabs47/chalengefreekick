import * as Freetypes from '../FActions/FActionstypes'

const FReducerservice = (state = { isLoading: false, error: undefined, data: [] }, action) => {
    switch (action.type) {
        case Freetypes.SERVICE_PENDING:
            return Object.assign([], state, {
                isLoading: true,
            });
        case Freetypes.SERVICE_ERROR:
            return Object.assign([], state, {
                isLoading: false,
                error: action.error
            });
        case Freetypes.SERVICE_SUCCESS:
            return Object.assign([], state, {
                isLoading: false,
                data: action.data.data
            }); 
        default:
            return state;
    }
}
export default FReducerservice;