import * as types from '../constants/action-types';
const initialState = {
  companyArray: ['tencent']
};

export default function listContainer(state = initialState, action) {
    switch (action.type) {
        case types.PUSH_TO_CONTAINER:
            let tempArray = state.companyArray.slice(0)
            if (tempArray.length > 1) {
                tempArray.shift()
            }
            tempArray.push(action.key)
            return Object.assign({}, state, { companyArray: tempArray });
        case types.DELETE_FROM_CONTAINER:
            return Object.assign({}, state, { companyArray: state.companyArray.filter(item => item != action.key) });
        default:
            return state;
    }
}