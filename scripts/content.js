let timer;

function startScroll(){
    timer = setInterval(() => {
        window.scrollBy(0, 2);
    }, 30)
}

function stopScroll(){
    clearInterval(timer);
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action == "start") startScroll();
    if (message.action == "stop") stopScroll();
})