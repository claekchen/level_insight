import * as types from '../constants/action-types';
import dataOfLevel from '../datas/dataOfLevel'
const initialState = {
  companyArray: ['tencent'],
  industry: 'SE',
  salaryVisible: false,
  companySelected: 'tencent',
  levelSelected: null
};

let defaultState = Object.assign({}, initialState)

const isSingleArray = (array) => {
    return array.length === 1 ? true : false;
}

const isExist = (value, array) => {
    return array.indexOf(value) !== -1 ? true : false;
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
                return defaultState
            }
        case types.SELECT_INDUSTRY:
            let tempCompany = []
            tempCompany.push(Object.keys(dataOfLevel[action.industry]['company'])[0])
            defaultState = Object.assign({}, state, {industry: action.industry, companyArray: tempCompany})
            return Object.assign({}, state, {industry: action.industry, companyArray: tempCompany})
        case types.TOGGLE_MODAL:
            return Object.assign({}, state, {salaryVisible: !state.salaryVisible})
        case types.SELECT_COMPANY_SALARY:
            return Object.assign({}, state, {companySelected: action.company})
        case types.SELECT_LEVEL_SALARY:
            return Object.assign({}, state, {levelSelected: action.level})
        default:
            return state;
    }
}