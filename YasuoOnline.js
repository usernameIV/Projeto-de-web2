const userData = {};

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const heroName = document.getElementById('signupHeroname').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    userData[email] = { heroName, email, password};
    alert ('SignUp successful!')

});


    document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = userData[email];

    if (user && user.password === password) {
        alert('Login Successful!')
    } else {
        alert('Invalid email or ppassword. Please try again.')
    }
    
    });