// common function for show/hide Donation & History section
function hideSHOW(toggleBtnId, showElId, hideElId) {

    const toggleBtn = document.getElementById(toggleBtnId);
    toggleBtn.addEventListener('click', function () {

        const show = document.getElementById(showElId);
        show.classList.remove('hidden');

        const hide = document.getElementById(hideElId);
        hide.classList.add('hidden');
    });
};


// this will show history section
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {
    hideSHOW('history-btn', 'history-container', 'donation-cards');

    // this will change the color of the active button
    historyBtn.classList.add('bg-[#B4F461]');
    const bt2 = document.getElementById('donation-btn');
    bt2.classList.remove('bg-[#B4F461]');
});

// this will show donation section
const donationBtn = document.getElementById('donation-btn');
donationBtn.addEventListener('click', function () {
    hideSHOW('donation-btn', 'donation-cards', 'history-container');

    // this will change the color of the active button
    donationBtn.classList.add('bg-[#B4F461]');
    const bt2 = document.getElementById('history-btn');
    bt2.classList.remove('bg-[#B4F461]');
});

// it will redirect to FAQ page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/blog.html';
});

 // // it will redirect to home page
 document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/flood-donatin.html';
});