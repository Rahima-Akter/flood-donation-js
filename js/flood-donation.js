// a common function for donating money
function donateMoney(mainAccountBalance, FdonationBalance, fDonationInput) {
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
    donateMoney('account-balance', 'n-donation-balance', 'n-donation-input');
});



// Feni donation box
const feniDonationBtn = document.getElementById('feni-donation-btn');
feniDonationBtn.addEventListener('click', function () {
    donateMoney('account-balance', 'feni-donation-balance', 'feni-donation-input');
});

// Quota Movemet donation box
const quotaMovementDonationBtn = document.getElementById('quota-movement-btn');
quotaMovementDonationBtn.addEventListener('click', function () {
    donateMoney('account-balance', 'quota-movement-balance', 'quota-movement-input');
});