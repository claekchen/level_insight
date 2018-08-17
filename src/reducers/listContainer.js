import * as types from '../constants/action-types';
const initialState = {
  companyArray: ['tencent']
};

const isSingleArray = (array) => {
    return array.length == 1 ? true : false;
}

const isExist = (value, array) => {
    return array.indexOf(value) != -1 ? true : false;
}
export default function listContainer(state = initialState, action) {
    switch (action.type) {
        case types.PUSH_TO_CONTAINER:
            let tempArray = state.companyArray.slice(0)
            if (isExist(action.key, state.companyArray)) {
                return isSingleArray(state.companyArray) ? state : Object.assign({}, state, { companyArray: state.companyArray.filter(item => item !== action.key) });
            } else {
                if (!isSingleArray(state.companyArray)) {
                    tempArray.shift()
                }
            }
            tempArray.push(action.key)
            return Object.assign({}, state, { companyArray: tempArray });
        case types.DELETE_FROM_CONTAINER:
            if (!isSingleArray(state.companyArray)) {
                return Object.assign({}, state, { companyArray: state.companyArray.filter(item => item !== action.key) });
            } else {
                return initialState
            }
        default:
            return state;
    }
}