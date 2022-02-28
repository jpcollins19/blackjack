const START_GAME = "START_GAME";

const _startGame = (value) => {
  return { type: START_GAME, value };
};

export const startGame = (value) => {
  return async (dispatch) => {
    dispatch(_startGame(value));
  };
};

export const game = (state = false, action) => {
  switch (action.type) {
    case START_GAME:
      state = action.value;
      return state;
    default:
      return state;
  }
};
