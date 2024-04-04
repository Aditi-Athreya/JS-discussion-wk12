// Get the radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Add event listener to each radio button
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        // Check if both radio buttons are selected
        const isBothSelected = Array.from(radioButtons).every(radioButton => radioButton.checked);

        // If both radio buttons are not selected, show an alert
        if (!isBothSelected) {
            alert('Please select both radio buttons');
        }
    });
});