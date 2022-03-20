import { Dispatch } from "redux"
export enum ActionTypes {
    INCREASE='INCREASE',
    DECREASE='DECREASE'
}
export type Action = IncreaseAction | DecreaseAction
type IncreaseAction = {
    type:ActionTypes.INCREASE
}
type DecreaseAction = {
    type:ActionTypes.DECREASE
}

export const increaseCounter = () => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.INCREASE
        })
    }
}


export const decreaseCounter = () => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.DECREASE
        })
    }
}
