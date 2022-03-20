import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
const rootReducer = combineReducers({
    counter:counterReducer
})

export type State = ReturnType<typeof rootReducer>
export default rootReducer