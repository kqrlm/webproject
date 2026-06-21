 const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
 
        function submitForm() {
            const fname = document.getElementById('fname').value.trim();
            const lname = document.getElementById('lname').value.trim();
            const mail  = document.getElementById('mail').value.trim();
            const msg   = document.getElementById('msg').value.trim();
 
            if (!fname || !lname || !mail || !msg) {
                alert('Please fill in all fields before submitting.');
                return;
            }
 
            document.getElementById('success').style.display = 'block';
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('mail').value  = '';
            document.getElementById('msg').value   = '';
        }