const initialState = 0;

const ActionType = {
  CHANGE: `CHANGE`
};

export const changeInput = (value) => ({
  type: ActionType.CHANGE,
  payload: value,
})

export const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE:
      return action.payload
    default:
      return state;
  };
}
