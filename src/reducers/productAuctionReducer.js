import * as TYPES from "../actions/types";

const initialState = {
  auctions: [],
  pages: null,
};

export default function productAuctionReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_AUCTIONS:
      return {
        ...state,
        auctions: action.payload,
      };
    case TYPES.SEARCH_PRODUCT:
      const res = state.auctions.map((item) => {
        if (
          item.title.includes(action.payload) ||
          item.description.includes(action.payload)
        ) {
          return item;
        }
      });
      return {
        ...state,
        auctions: res,
      };
    case TYPES.FETCH_PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    default:
      return state;
  }
}
