// get current date
const today = new Date();
let currentYear = today.getFullYear(),
    currentMonth = (today.getMonth()+1),
    currentDay = today.getDate(),
    currentDate = currentYear + "-" + currentMonth + "-" + currentDay,
    ageVerified = JSON.parse(localStorage.getItem("ageVerified"));

// function to check localstorage for age verified
function checkVeri() {
    // check if verification key exists or if key value check is false or expired
    if (ageVerified === null || ageVerified.check === false || currentDate > ageVerified.expire) {
        ageVerified = {
            check: false
        }
        syncVeri();
        $('#ageModal').modal('show');
    }
}

// sync verification
async function syncVeri() {
    let storeVeri = await ageVerified;
    localStorage.setItem("ageVerified", JSON.stringify(storeVeri));
}

// set local storage age verified and hide modal
function hideVeri() {
    ageVerified.check = true;
    $('#ageModal').modal('hide');
    // expire date for verification
    let toExpire = today;
    toExpire.setDate(currentDay + 7)
    ageVerified.expire = toExpire.getFullYear() + "-" + (toExpire.getMonth()+1) + "-" + toExpire.getDate();
    syncVeri();
}
// redirect to nix18
function nix() {
    window.location.replace("https://www.nix18.nl/");
}

// check age
function checkAge() {
    let givenAge = document.getElementById('dateInput').value,
        checkGivenYear = "",
        checkGivenMonth = "",
        checkGivenDay = "";

    // turn given age into sepperate values for verification process
    checkGivenYear  = parseInt(givenAge.slice(0, 4));
    checkGivenMonth = parseInt(givenAge.slice(5, 7));
    checkGivenDay   = parseInt(givenAge.slice(8, 10));
    
    // Stop function if given year is more than 150 years ago
    if (checkGivenYear <= (currentYear - 150)) {
        return
    }

    // Check if year born + 18 is les or equal to current year
    if ((checkGivenYear + 18 ) <= currentYear) {
        // Check when year is good, if the month is less than current month
        if (checkGivenMonth < currentMonth) {
            hideVeri();
            return
        } else if ((checkGivenYear + 18 ) == currentYear){
            // Check if month born is les or equal to current month and date is les or equal
            if (checkGivenMonth <= currentMonth && checkGivenDay <= currentDay) {   
                hideVeri();
                return            
            } else {
                nix();
            }
        }
        hideVeri();
        return
    } else {
        nix();
    }
}

// check age button
function VerBTN() {
    let BTN = document.getElementById('ageCheckBTN');
    BTN.addEventListener('click', checkAge);
}

// activate on page load
document.addEventListener('DOMContentLoaded', () => {
    checkVeri();
    VerBTN();
});