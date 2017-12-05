import * as Freetypes from './FActionstypes';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import BarcelonaService from '../components/BarcelonaService';

const mapStateToProps = (state) => ({
    isLoading: state.freducers.isLoading,
    error: state.freducers.error,
    data: state.freducers.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
})

export const callWebservice = (firtsletter = '') => {
    return dispatch => {
        dispatch(serviceActionPending())
        axios.get(`https://myser.com/users?results=${firtsletter.slice(1)}`)
        .then(response => {
            dispatch(serviceActionSuccess(response))
            
        })
        .catch(error => {
            dispatch(serviceActionError(error))
        });
    }
}

export const serviceActionPending = () => ({
    type: Freetypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
    type: Freetypes.SERVICE_ERROR,
    error: error
})

export const serviceActionSuccess = (data) => ({
    type: Freetypes.SERVICE_SUCCESS,
    data:data
})



export default connect(mapStateToProps, mapDispatchToProps)(BarcelonaService);