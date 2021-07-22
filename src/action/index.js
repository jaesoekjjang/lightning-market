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