
const initialState = 0

export enum ActionTypes {
    INCREASE='INCREASE',
    DECREASE='DECREASE'
}

type IncreaseAction = {
    type:ActionTypes.INCREASE
}
type DecreaseAction = {
    type:ActionTypes.DECREASE
}

type Action = IncreaseAction | DecreaseAction
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
