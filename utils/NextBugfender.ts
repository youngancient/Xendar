import { Bugfender } from "@bugfender/sdk";


const NextBugFender = {
    init : ()=>{
        Bugfender.init({appKey : `${process.env.NEXT_PUBLIC_BUGFENDER_API_KEY}` ,})
    },
    log: (...messages) => {
        Bugfender.log(messages.join( ))
    },

    warn: (...messages) => {
        Bugfender.warn(messages.join( ))
    },

    error: (...messages) => {
        Bugfender.error(messages.join( ))
    },

    sendUserFeedback: (key, value) => {
        Bugfender.sendUserFeedback(key, value)
    },

    sendIssue: (key, value) => {
        Bugfender.sendIssue(key, value)
    },

    sendCrash: (key, value) => {
        Bugfender.sendCrash(key, value)
    }

}

export default NextBugFender;
