// common function for show/hide Donation & History section
function hideSHOW(buttonId, showElId, hideElId) {

    const toggleBtn = document.getElementById(buttonId);
    toggleBtn.addEventListener('click', function () {

        const show = document.getElementById(showElId);
        show.classList.remove('hidden');
        toggleBtn.classList.add('bg-[#B4F461]');

        const hide = document.getElementById(hideElId);
        hide.classList.add('hidden');
        toggleBtn.classList.remove('bg-[#B4F461]');
    });
};

// this will show history section
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {
    hideSHOW('history-btn', 'history-container', 'donation-cards')
});

// this will show donation section
const Donation = document.getElementById('donation-btn');
historyBtn.addEventListener('click', function () {
    hideSHOW('donation-btn', 'donation-cards', 'history-container')
});