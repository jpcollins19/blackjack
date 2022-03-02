const START_GAME = "START_GAME";
const NEXT_UP = "NEXT_UP";

const _startGame = (value) => {
  return { type: START_GAME, value };
};

const _nextUp = () => {
  return { type: NEXT_UP };
};

export const startGame = (value) => {
  return async (dispatch) => {
    dispatch(_startGame(value));
  };
};

export const nextUp = () => {
  return async (dispatch) => {
    dispatch(_nextUp());
  };
};

export const gameStarted = (state = false, action) => {
  switch (action.type) {
    case START_GAME:
      state = action.value;
      return state;
    default:
      return state;
  }
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
