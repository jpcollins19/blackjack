import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { users } = require("./users_store");
const { deck } = require("./deck_store");
const { game } = require("./game_started_store");
const { dealerHand } = require("./dealer_hand_store");
const { yourHand, yourHandCalc } = require("./your_hand_store");

const reducer = combineReducers({
  auth,
  users,
  deck,
  game,
  dealerHand,
  yourHand,
  yourHandCalc,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./users_store";
export * from "./deck_store";
export * from "./game_started_store";
export * from "./dealer_hand_store";
export * from "./your_hand_store";
export * from "./funcs";
