const NEXT_UP = "NEXT_UP";
const HAND_DEALT = "HAND_DEALT";
const HAND_OVER = "HAND_OVER";

const _nextUp = () => {
  return { type: NEXT_UP };
};

const _handDealt = (boolean) => {
  return { type: HAND_DEALT, boolean };
};

const _handOver = () => {
  return { type: HAND_OVER };
};

export const nextUp = () => {
  return async (dispatch) => {
    dispatch(_nextUp());
  };
};

export const handDealt = (boolean) => {
  return async (dispatch) => {
    dispatch(_handDealt(boolean));
  };
};

export const handOver = () => {
  return async (dispatch) => {
    dispatch(_handOver());
  };
};

export const userTurn = (state = true, action) => {
  switch (action.type) {
    case NEXT_UP:
      state = !state;
      return state;
    default:
      return state;
  }
};

export const dealComplete = (state = false, action) => {
  switch (action.type) {
    case HAND_DEALT:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const handIsOver = (state = false, action) => {
  switch (action.type) {
    case HAND_OVER:
      state = !state;
      return state;
    default:
      return state;
  }
};
