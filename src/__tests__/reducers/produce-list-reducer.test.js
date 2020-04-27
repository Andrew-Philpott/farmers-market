import produceListReducer from "../../reducers/produce-list-reducer";

describe("produceListReducer", () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(produceListReducer({}, { type: null })).toEqual({});
  });
});
