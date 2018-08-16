import * as types from '../constants/action-types';
import dataOfLevel from '../datas/dataOfLevel'
const updateDataSource = (data) => {
    return (
        {
            type: types.UPDATE_DATASOURCE,
            data: data
        }
    );
};

export const getData = (nameOfCompany) => {
    return (dispatch) => {
        const data = dataOfLevel[nameOfCompany]; // placeholder
        dispatch(updateDataSource(data))
    }
}