const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

const form = document.querySelector('form');
form.addEventListener('submit', async function(e) {
    e.preventDefault(); // stop normal redirect

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const mail  = document.getElementById('mail').value.trim(); 
    const msg   = document.getElementById('msg').value.trim();

    if (!fname || !lname || !mail || !msg) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        document.getElementById('success').style.display = 'block';
        form.reset(); 
    } else {
        const data = await response.json();
        alert('Error: ' + data.message);
    }
});