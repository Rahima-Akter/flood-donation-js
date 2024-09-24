// a common function for donating money
function donateMoney(mainAccountBalance, FdonationBalance, fDonationInput, hItems, donationTitle) {
    let accountBalance = parseFloat(document.getElementById(mainAccountBalance).innerText);
    let donationBalance = parseFloat(document.getElementById(FdonationBalance).innerText);
    const donationInput = parseFloat(document.getElementById(fDonationInput).value);


    // checks the required conditions
    if (!isNaN(donationInput) && donationInput > 0 && donationInput <= accountBalance) {
        donationBalance += donationInput;
        accountBalance = accountBalance - donationInput;

        // upadate the new balance to the accounts
        document.getElementById(FdonationBalance).innerText = donationBalance.toFixed(2);
        document.getElementById(mainAccountBalance).innerText = accountBalance.toFixed(2);

        // history
        const historyItems = document.getElementById(hItems);
        const doantionH2 = document.getElementById(donationTitle).innerText;

        const time = new Date();
        historyItems.innerHTML += `
            <div class="bg-[#faf9f7] rounded-md py-6 shadow-sm shadow-gray-400">
                <p class="collapse-title text-sm md:text-xl font-medium">${donationInput} Taka is Donated for ${doantionH2}</p>
                <p class="mx-2 md:px-4 px-2 p-2 bg-gray-100 md:w-5/6 rounded-md text-[10px] md:text-sm">Donated At : ${time}</p>
            </div>
        `;

        // it will refresh the page
        my_modal_5.showModal();
        document.getElementById('modal-btn').addEventListener('click', function () {
            my_modal_5.close();
        });
    } else {
        alert('Invalid Amount');
    }
};



// Noakhali donation box
const noakhaliDonationBtn = document.getElementById('n-donation-btn');
noakhaliDonationBtn.addEventListener('click', function () {
    donateMoney('account-balance', 'n-donation-balance', 'n-donation-input', 'history-items', 'noakhali-h2');
});



// Feni donation box
const feniDonationBtn = document.getElementById('feni-donation-btn');
feniDonationBtn.addEventListener('click', function () {
    donateMoney('account-balance', 'feni-donation-balance', 'feni-donation-input', 'history-items', 'feni-h2');
});


// Quota Movemet donation box
const quotaMovementDonationBtn = document.getElementById('quota-movement-btn');
quotaMovementDonationBtn.addEventListener('click', function () {
    donateMoney('account-balance', 'quota-movement-balance', 'quota-movement-input', 'history-items', 'quota-h2');
});