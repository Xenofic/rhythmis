module.exports = {   
    getFile(file) {
        if (file == undefined) return file;
        // play
        if (file == "p") return "play"
        // playlist
        if (file == "pl" || file == "list") return "playlist"
        // stop
        if (file == "st") return "stop"
        // resume
        if (file == "continue" || file == "r") return "resume"
        // skip
        if (file == "s" || file == "sk") return "skip"
        // volume
        if (file == "v" || file == "vol" || file == "vlm") return "volume"
        // pause
        if (file == "ps" || file == "pa") return "pause"
        // loop
        if (file == "l" || file == "repeat" || file == "rep") return "loop"
        // stoploop
        if (file == "stoploop" || file == "sl") return "stoploop"
        // Help
        if (file == "h" || file == "about") return "help"
        // twitch
        if (file == "yt" || file == "y") return "youtube"
        // queue
        if (file == "q" || file == "que") return "queue"
        return file;
    }
}