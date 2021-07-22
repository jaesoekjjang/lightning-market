import { HOTSRCHWORD, RECENTSRCHWORD, PRODUCTWARNINGMSG } from "../action"

const initState = {
    recentSrchWord: true,
    hotSrchWord: false,
    productWarningMsg: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case RECENTSRCHWORD:
            return {...state, recentSrchWord: action.boolean}
        case HOTSRCHWORD:
            return {...state, hotSrchWord: action.boolean}
        case PRODUCTWARNINGMSG:
            return {...state, productWarningMsg: action.boolean}
    default:
        return state;
    }
}

export default reducer