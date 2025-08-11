// Script for Google Sheets Form Submission
const scriptURL = "https://script.google.com/macros/s/AKfycbzZ2uEjOrRMJ1217K0pMbcWA9bZ3mRdeZMgKKcEZXBwZANJZ0GkRUIKWFBHkQniGwHWBA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const submitBtn = document.querySelector(".submitBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log("Form Data:", Object.fromEntries(formData.entries())); // Logs all form data

    if (!formData.get("email") || !formData.get("message") || !formData.get("name")) {
        console.error("Missing required fields!");
        msg.style.color = "red";
        msg.innerHTML = "All fields are required!";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.style.background = "gray";
    msg.innerHTML = "Sending message...";

    try {
        const response = await fetch(scriptURL, { method: "POST", body: formData });
        if (!response.ok) throw new Error("Failed to send message!");

        msg.style.color = "green";
        msg.innerHTML = "Message sent successfully! Check your email.";

        form.reset();
    } catch (error) {
        msg.style.color = "red";
        msg.innerHTML = "Error sending message. Try again later!";
        console.error("Error!", error.message);
    } finally {
        setTimeout(() => {
            msg.innerHTML = "";
            submitBtn.disabled = false;
            submitBtn.style.background = "blue";
        }, 5000);
    }
});