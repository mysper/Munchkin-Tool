import { ADD_LEVEL, SUB_LEVEL, ADD_ATTACK, SUB_ATTACK, ENTER_ROOM, EDIT_NAME } from './constants'

export const dealLevel = (op) => async (dispatch) => {
    if (op === 'add')
        dispatch({
            type: ADD_LEVEL
        });
    else if (op === 'sub')
        dispatch({ type: SUB_LEVEL });
    try {

    } catch (erro) {

    }
};

export const dealAttack = (op) => async (dispatch) => {
    if (op === 'add')
        dispatch({
            type: ADD_ATTACK
        });
    else if (op === 'sub')
        dispatch({ type: SUB_ATTACK });
    try {

    } catch (erro) {

    }
}

export const enterRoom = (number) => (dispatch) => {
    dispatch({
        type: ENTER_ROOM, payload: number
    })
}

export const editName = (name) => (dispatch) => {
    dispatch({
        type: EDIT_NAME, payload: name
    })
}