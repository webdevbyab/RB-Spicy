const pins = document.querySelectorAll('.pin');
const keys = document.querySelectorAll('.key');
const message = document.getElementById('message');
let currentPinIndex = 0;

// Add event listeners to keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;

        if (key.classList.contains('clear')) {
            // Clear all inputs
            pins.forEach(pin => pin.value = '');
            currentPinIndex = 0;
            message.textContent = '';
        } else if (key.classList.contains('submit')) {
            // Submit the password
            const enteredPassword = Array.from(pins).map(pin => pin.value).join('');
            const correctPassword = "0333";

            if (enteredPassword === correctPassword) {
                message.textContent = "Password Correct! Redirecting...";
                message.style.color = "green";
                // Redirect to index1.html after 1 second
                setTimeout(() => {
                    window.location.href = "Admin.html";
                }, 1000);
            } else {
                message.textContent = "Incorrect Password!";
                message.style.color = "red";
            }
        } else {
            // Enter a digit
            if (currentPinIndex < pins.length) {
                pins[currentPinIndex].value = keyValue;
                currentPinIndex++;
            }
        }
    });
});

// Automatically move focus to the next input
pins.forEach((pin, index) => {
    pin.addEventListener('input', () => {
        if (pin.value.length === 1 && index < pins.length - 1) {
            pins[index + 1].focus();
        }
    });
});