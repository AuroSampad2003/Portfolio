const scriptURL = "https://script.google.com/macros/s/AKfycbzZ2uEjOrRMJ1217K0pMbcWA9bZ3mRdeZMgKKcEZXBwZANJZ0GkRUIKWFBHkQniGwHWBA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const submitBtn = document.querySelector(".submitBtn");

function showMessage(text, type, duration = 5000) {
    // Clear any existing timeouts
    clearTimeout(msg.hideTimeout);
    clearTimeout(msg.progressTimeout);
    
    // Set message content and show
    msg.innerHTML = `${text}<div class="progress-bar"></div>`;
    msg.className = `message-banner ${type} show`;
    
    // Start progress bar animation and hide after duration
    msg.progressTimeout = setTimeout(() => {
        msg.classList.add('hide');
        
        // Remove from DOM after hide animation completes
        msg.hideTimeout = setTimeout(() => {
            msg.classList.remove('show', 'hide', type);
            msg.innerHTML = '';
        }, 300);
        
    }, duration);
}

function showSuccessSequence() {
    // First show success message
    showMessage("Message sent successfully!", "success", 3000); // 4 seconds
    
    // Then show email check message after first message completes
    setTimeout(() => {
        showMessage("Check your email for confirmation.", "info", 4000); // 4 seconds
    }, 3500); // Show second message 500ms after first message hides
}

function hideMessage() {
    clearTimeout(msg.hideTimeout);
    clearTimeout(msg.progressTimeout);
    msg.classList.add('hide');
    
    setTimeout(() => {
        msg.classList.remove('show', 'hide');
        msg.className = 'message-banner';
        msg.innerHTML = '';
    }, 300);
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    if (!formData.get("email") || !formData.get("message") || !formData.get("name")) {
        showMessage("All fields are required!", "error");
        return;
    }
    
    submitBtn.disabled = true;
    // Show loading message with longer progress bar duration
    showMessage("Sending message...", "loading", 8000); // 8 seconds for loading
    
    try {
        const response = await fetch(scriptURL, { method: "POST", body: formData });
        if (!response.ok) throw new Error("Failed to send message!");
        
        // Wait a moment then show success sequence
        setTimeout(() => {
            showSuccessSequence(); // Show both success messages in sequence
        }, 500);
        form.reset();
    } catch (error) {
        // Wait a moment then show error message
        setTimeout(() => {
            showMessage("Error sending message. Try again later!", "error");
        }, 500);
        console.error("Error!", error.message);
    } finally {
        setTimeout(() => {
            submitBtn.disabled = false;
        }, 1000);
    }
});
