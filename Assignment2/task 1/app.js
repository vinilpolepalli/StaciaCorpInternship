document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const storedName = document.getElementById('storedName');
    const storedEmail = document.getElementById('storedEmail');

    // Load stored data
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        storedName.textContent = `Name: ${name}`;
        storedEmail.textContent = `Email: ${email}`;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;

        // Save to localStorage
        localStorage.setItem('name', nameInput);
        localStorage.setItem('email', emailInput);

        // Update displayed information
        storedName.textContent = `Name: ${nameInput}`;
        storedEmail.textContent = `Email: ${emailInput}`;
    });
});