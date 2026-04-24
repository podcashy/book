const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz91zjIKHj6GwGoOYGQ5MpLFLY6_4wocXTQLByRlTBsNgLnMmS1jiJzB8HsnBVCWUlCvw/exec";

async function handleLogin(event) {
    event.preventDefault();
    const nationalId = document.getElementById('nationalId').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify({ nationalId, password })
        });
        const result = await response.json();

        if (result.success) {
            // Save login state so they don't have to login again
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', result.name);
            localStorage.setItem('userCredits', result.credits);
            
            // Redirect to the first part
            window.location.href = "part1.html";
        } else {
            alert("Invalid National ID or Password. Please try again.");
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert("Connection error. Please try again later.");
    }
}
