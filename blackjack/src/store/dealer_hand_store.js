import { calcHand } from "./funcs";

const FETCH_DEALER_HAND = "FETCH_DEALER_HAND";
const HIT_DEALER = "HIT_DEALER";
const CLEAR_HAND = "CLEAR_HAND";
const CALC_DEALER_HAND = "CALC_DEALER_HAND";

const _fetchDealerHand = () => {
  return { type: FETCH_DEALER_HAND };
};

const _hitDealer = (card) => {
  return { type: HIT_DEALER, card };
};

const _calcDealerHand = (total) => {
  return { type: CALC_DEALER_HAND, total };
};

export const fetchDealerHand = () => {
  return async (dispatch) => {
    dispatch(_fetchDealerHand());
  };
};

export const hitDealer = (card) => {
  return async (dispatch) => {
    dispatch(_hitDealer(card));
  };
};

export const calculateDealerHand = (arr) => {
  return async (dispatch) => {
    const total = calcHand(arr);
    dispatch(_calcDealerHand(total));
  };
};

export const dealerHand = (state = [], action) => {
  switch (action.type) {
    case FETCH_DEALER_HAND:
      return state;
    case HIT_DEALER:
      state.push(action.card);
      return state;
    case CLEAR_HAND:
      state = [];
      return state;
    default:
      return state;
  }
};

export const dealerHandCalc = (state = 0, action) => {
  switch (action.type) {
    case CALC_DEALER_HAND:
      state = action.total;
      return state;
    default:
      return state;
  }
};
