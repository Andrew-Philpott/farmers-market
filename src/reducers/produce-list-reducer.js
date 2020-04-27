export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCELISTITEM":
      const { id, month, selection } = action;
      console.log(id);
      console.log(month);
      console.log(selection);
      return Object.assign({}, state, {
        [id]: {
          id: id,
          month: month,
          selection: selection,
        },
      });
    default:
      return state;
  }
};
