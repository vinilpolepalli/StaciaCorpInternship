document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');

    // Load saved color from localStorage
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorPicker.value = savedColor;
    }

    // Event listener for color change
    colorPicker.addEventListener('change', (event) => {
        const selectedColor = event.target.value;
        document.body.style.backgroundColor = selectedColor;
        localStorage.setItem('backgroundColor', selectedColor);
    });
});