// common function for show/hide Donation & History section
function hideSHOW(showElId, hideElId) {

    const show = document.getElementById(showElId);
    show.classList.remove('hidden');

    const hide = document.getElementById(hideElId);
    hide.classList.add('hidden');
};

// common function to change bg of the current active button
function activeBtn(activeBtn1, activeBtn2) {
    activeBtn1.classList.add('bg-[#B4F461]');
    activeBtn2.classList.remove('bg-[#B4F461]');
}


// this will show history section
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {
    hideSHOW('history-container', 'donation-cards');

    // this will change the color of the active button
    activeBtn(historyBtn, donationBtn);
});

// this will show donation section
const donationBtn = document.getElementById('donation-btn');
donationBtn.addEventListener('click', function () {
    hideSHOW('donation-cards', 'history-container');

    // this will change the color of the active button
    activeBtn(donationBtn, historyBtn);
});


// it will redirect to FAQ page
function showBlog() {
    window.location.href = 'https://rahima-akter.github.io/flood-donation-js/blog.html';
}

// it will redirect to home page
function showHome() {
    window.location.href = 'https://rahima-akter.github.io/flood-donation-js/flood-donation.html';
}


