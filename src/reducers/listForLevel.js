import * as types from '../constants/action-types';
const initialState = {
    dataSource:[]
};

export default function listForLevel(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_DATASOURCE:
            return Object.assign({}, state, { dataSource: action.data });
        default:
            return state;
    }
}