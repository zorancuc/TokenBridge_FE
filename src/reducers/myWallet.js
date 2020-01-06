import { SET_PIA_BALANCE, SET_ETH_BALANCE } from '../actions/types';

const initialState = {
	piaBalance: 0,
	ethBalance: 0
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case SET_PIA_BALANCE:
			return {
				...state,
				piaBalance: action.payload
            };
        case SET_ETH_BALANCE:
            return {
                ...state,
                ethBalance: action.payload
            };
		default: 
			return state;
	}
}