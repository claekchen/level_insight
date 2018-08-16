import * as types from '../constants/action-types';
export const pushToContainer = (key) => {
    return (
        {
            type: types.PUSH_TO_CONTAINER,
            key: key
        }
    );
};

export const deleteFromContainer = (key) => {
  return (
    {
        type: types.DELETE_FROM_CONTAINER,
        key: key
    }
);
}