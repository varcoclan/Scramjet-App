if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then(() => {
        console.log('Scramjet is ready to unblock.');
    });
}

// Config for the page to use
window.scramjetConfig = {
    prefix: '/sj/'
};
