document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    function handleRegister(event) {
        event.preventDefault();

        const nickname = document.getElementById('register-nickname').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === email)) {
            alert('El email ya está registrado');
            return;
        }

        users.push({ nickname, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso');
        registerForm.reset();
    }

    function handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert('Email o contraseña incorrectos');
            return;
        }

        alert('Inicio de sesión exitoso');
        loginForm.reset();

        window.location.href = 'visual3.html'; 
    }
});
