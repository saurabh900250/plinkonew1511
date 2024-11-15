// Show CAPTCHA verification
function showCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    captchaContainer.classList.remove('hidden');
}

// Verify CAPTCHA
function verifyCaptcha() {
    // Display a success message
    const captchaContainer = document.getElementById('captcha-container');
    captchaContainer.innerHTML = "<p>Verified successfully!</p>";
    
    // Redirect to the desired page after a short delay
    setTimeout(() => {
        window.location.href = "https://kindergartenchaos.com/plinko-games-for-the-classroom/";
    }, 2000); // 2-second delay
}
