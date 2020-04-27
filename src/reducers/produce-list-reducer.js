export default (state = {}, action) => {
  const { id, month, selection } = action;
  switch (action.type) {
    case "ADD_PRODUCELISTITEM":
      return Object.assign({}, state, {
        [id]: {
          id: id,
          month: month,
          selection: selection,
        },
      });
    case "DELETE_PRODUCELISTITEM":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
