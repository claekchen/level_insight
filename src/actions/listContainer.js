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

export const selectIndustry = (industry) => {
    return (
        {
            type: types.SELECT_INDUSTRY,
            industry: industry
        }
    )
}

export const toggleSalaryModal = () => {
    return (
        {
            type: types.TOGGLE_MODAL
        }
    )
}

const updateCompanyForSalary = (company) => {
  return (
      {
          type: types.SELECT_COMPANY_SALARY,
          company: company
      }
  )
}

const updateLevelForSalary = (level) => {
  return (
    {
        type: types.SELECT_LEVEL_SALARY,
        level: level
    }
)
}
export const selectCompanyForSalary = (company, level) => {
    return (dispatch) => {
      dispatch(updateCompanyForSalary(company))
      dispatch(updateLevelForSalary(level))
      dispatch(toggleSalaryModal())
    }
}