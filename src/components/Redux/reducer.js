import * as types from "./action-type"

const initialstate = {
    users: [],
    loading: true
}

export const reducer_fn = (state = initialstate, action) => {
    switch (action.type) {
        case types.ADDPOST:

        default:
            return state
    }

}
