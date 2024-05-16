function isThursday() {
    const today = new Date();
    return today.getDay() === 4; // 0 is Sunday, 1 is Monday, ..., 4 is Thursday
}

// Function to show the element if today is Thursday
function showOnThursday(selector) {
    const element = document.getElementById(selector);
    if (isThursday()) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

showOnThursday('thursday');
