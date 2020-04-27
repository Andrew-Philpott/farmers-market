import produceListReducer from "../../reducers/produce-list-reducer";

describe("produceListReducer", () => {
  let action;
  const availableProduce = {
    id: 1,
    month: "January",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips",
    ],
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(produceListReducer({}, { type: action })).toEqual({});
  });

  test("Should successfully add a new produce list item to the master produce list", () => {
    const { id, month, selection } = availableProduce;
    action = {
      type: "ADD_PRODUCELISTITEM",
      id: id,
      month: month,
      selection: selection,
    };
    expect(produceListReducer({}, action)).toEqual({
      [id]: {
        id: id,
        month: month,
        selection: selection,
      },
    });
  });
});
