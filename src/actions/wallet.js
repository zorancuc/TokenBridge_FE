import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_PIA_BALANCE, SET_ETH_BALANCE } from './types';

export const getExchangeBalance = () => dispatch => {
	
	axios.get('api/bridge/v1/exchange/getExchangeBalance', )
	.then(res => {
        const {piaBalance, ethBalance} = res.data;
        console.log("OKOK");
        console.log(piaBalance, ethBalance);
        dispatch({
			type: SET_PIA_BALANCE,
			payload: piaBalance
        });
        
        dispatch({
			type: SET_ETH_BALANCE,
			payload: ethBalance
		});
    })
	.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err
		});
	});
}
