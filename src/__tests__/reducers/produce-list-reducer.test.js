import produceListReducer from "../../reducers/produce-list-reducer";

describe("produceListReducer", () => {
  let action;
  const produceListItemOne = {
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
  const masterProduceList = {
    1: {
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
    },
    2: {
      id: 2,
      month: "February",
      selection: [
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
      ],
    },
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(produceListReducer({}, { type: action })).toEqual({});
  });

  test("Should successfully add a new produce list item to the master produce list", () => {
    const { id, month, selection } = produceListItemOne;
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

  test("Should successfully delete produce list item from the master produce list", () => {
    action = {
      type: "DELETE_PRODUCELISTITEM",
      id: 1,
    };
    expect(produceListReducer(masterProduceList, action)).toEqual({
      2: {
        id: 2,
        month: "February",
        selection: [
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
        ],
      },
    });
  });
});
