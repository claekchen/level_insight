import * as types from '../constants/action-types';

const updateDataSource = (data) => {
    return (
        {
            type: types.UPDATE_DATASOURCE,
            data: data
        }
    );
};

export const getData = () => {
    return (dispatch) => {
        const data = [        
            {
                title: 'T1'
            },
            {
                title: 'T2'
            }
    ]; // placeholder
        dispatch(updateDataSource(data))
    }
}