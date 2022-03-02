import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { users } = require("./users_store");
const { deck } = require("./deck_store");
const { gameStarted, userTurn } = require("./game_store");
const { dealerHand, dealerHandCalc } = require("./dealer_hand_store");
const { yourHand, yourHandCalc } = require("./your_hand_store");

const reducer = combineReducers({
  auth,
  users,
  deck,
  gameStarted,
  dealerHand,
  yourHand,
  yourHandCalc,
  userTurn,
  dealerHandCalc,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./users_store";
export * from "./deck_store";
export * from "./game_store";
export * from "./dealer_hand_store";
export * from "./your_hand_store";
export * from "./funcs";
