function isThursday() {
    const today = new Date();
    return today.getDay() === 4; // 0 is Sunday, 1 is Monday, ..., 4 is Thursday
}

// Function to show the element if today is Thursday
function showOnThursday(selector) {
    const element = document.getElementById(selector);
    if (isThursday()) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}

showOnThursday("thursday");

function setConditionalHeader() {
    const headerElement = document.getElementById("newsletter");
    const month = new Date().getMonth(); // 0-11 (January is 0, December is 11)

    let headerText;

    switch (month) {
        case 0:
            headerText = "~❄~(._.) 🌟❄️ JANUARY NEWSLETTER ❄️🌟 (._.)~❄~";
            break;
        case 1:
            headerText = "~❤~(^_^) ❣️💌 FEBRUARY NEWSLETTER 💌❣️ (^_^)~❤~";
            break;
        case 2:
            headerText = "~🌸~(o.o) 🌷🐣 MARCH NEWSLETTER 🐣🌷 (o.o)~🌸~";
            break;
        case 3:
            headerText = "~🐰~(>.<) 🌸🐇 APRIL NEWSLETTER 🐇🌸 (>.<)~🐰~";
            break;
        case 4:
            headerText = "~🌼~(^^) 🌼🐝 MAY NEWSLETTER 🐝🌼 (^^)~🌼~";
            break;
        case 5:
            headerText = "~🌞~(^_^) ☀️🍉 JUNE NEWSLETTER 🍉☀️ (^_^)~🌞~";
            break;
        case 6:
            headerText = "~🌴~(o_o) 🌴🍹 JULY NEWSLETTER 🍹🌴 (o_o)~🌴~";
            break;
        case 7:
            headerText = "~~(˘▾˘~) 🌻🐝 AUGUST NEWSLETTER 🌻🐝 (~˘▾˘)~~";
            break;
        case 8:
            headerText = "~🍁~(*_*) 🍁🎒 SEPTEMBER NEWSLETTER 🎒🍁 (*_*)~🍁~";
            break;
        case 9:
            headerText = "~🎃~(^o^) 🎃🍂 OCTOBER NEWSLETTER 🍂🎃 (^o^)~🎃~";
            break;
        case 10:
            headerText = "~🦃~(>_<) 🦃🍂 NOVEMBER NEWSLETTER 🍂🦃 (>_<)~🦃~";
            break;
        case 11:
            headerText = "~🎄~(*_*) 🎄🎁 DECEMBER NEWSLETTER 🎁🎄 (*_*)~🎄~";
            break;
        default:
            headerText = "Welcome!";
    }

    headerElement.textContent = headerText;
}

// Call the function to set the header when the page loads
window.onload = setConditionalHeader;
