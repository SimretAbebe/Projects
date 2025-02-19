document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';


    if (chars === '') {
        alert('Please select at least one option.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('readonly').value = password;
}


document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('readonly');

    if (passwordField.value === '') {
        alert('No password to copy. Please generate a password first.');
        return;
    }


    passwordField.select();
    passwordField.setSelectionRange(0, 99999);


    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert('Password copied to clipboard!');
    })
});
