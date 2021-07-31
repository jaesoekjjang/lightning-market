// import { HOTSRCHWORD, RECENTSRCHWORD, PRODUCTWARNINGMSG } from "../action"
export const RECENTSRCHWORD = 'RECENTSRCHWORD';
export const HOTSRCHWORD = 'HOTSRCHWORD';
export const PRODUCTWARNINGMSG = "PRODUCTWARNINGMSG";

export const recentSrchWord = (bool) => ({
    type: RECENTSRCHWORD,
    boolean: bool
});

export const hotSrchWord = (bool) => ({
    type: HOTSRCHWORD,
    boolean: bool
})

export const productWarningMsg = (bool) => ({
    type: PRODUCTWARNINGMSG,
    boolean: bool
})


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