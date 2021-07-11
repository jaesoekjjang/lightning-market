import { HOTSRCHWORD, RECENTSRCHWORD } from "../action"

const initState = {
    recentSrchWord: true,
    hotSrchWord: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case RECENTSRCHWORD:
            return {...state, recentSrchWord: action.boolean}
        case HOTSRCHWORD:
            return {...state, hotSrchWord: action.boolean}
    default:
        return state;
    }
}

export default reducer