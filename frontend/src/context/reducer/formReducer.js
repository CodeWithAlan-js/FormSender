export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return action.initialFormData;
    default:
      return state;
  }
};

export default formReducer;
