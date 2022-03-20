
import { ActionTypes } from "../action-creators/couterActions"
import { Action } from "../action-creators/couterActions"
const initialState = 0


export default (state = initialState, action : Action) => {
  switch (action.type) {
    case ActionTypes.INCREASE:
        return state+1
    case ActionTypes.DECREASE:
        return state-1
  default:
    return state
  }
}
