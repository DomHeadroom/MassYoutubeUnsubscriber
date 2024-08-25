(async function iife() {
    var UNSUBSCRIBE_DELAY_TIME = 100;
    var CONFIRM_DELAY_TIME = 100;

    var runAfterDelay = (fn, delay) => new Promise((resolve, reject) => {
        setTimeout(() => {
            fn();
            resolve();
        }, delay);
    });

    var channels = Array.from(document.querySelectorAll(`.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading-trailing`));
    console.log(`${channels.length} channels found.`);

    for (const channel of channels) {
        channel.click();

        await runAfterDelay(() => {
            var dis = Array.from(document.querySelectorAll(".style-scope.ytd-menu-popup-renderer"));

            dis[4].click();
        }, UNSUBSCRIBE_DELAY_TIME);

        await runAfterDelay(() => {}, CONFIRM_DELAY_TIME);

        await runAfterDelay(() => {
            document.getElementById('confirm-button').getElementsByTagName('button')[0].click();
        }, 0);
    }
})();
