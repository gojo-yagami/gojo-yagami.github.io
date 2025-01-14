// Function to generate the WhatsApp QR code for pairing
function generateQRCode() {
    const phoneNumber = document.getElementById("phone-number").value.trim();

    // Validate the phone number
    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number in international format (e.g., +94712345678).");
        return;
    }

    const message = "Hello, I want to connect with you!"; // Optional: add a custom message to start the chat
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;

    // Generating the QR code using the API
    document.getElementById("qr-code").src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=300x300`;
}

// Function to validate the phone number
function isValidPhoneNumber(phoneNumber) {
    // Regex to allow international format (e.g., +94712345678)
    const phoneRegex = /^\\+94[0-9]{9}$/; // Matches +94 followed by exactly 9 digits
    return phoneRegex.test(phoneNumber);
}

// Add event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQRCode);
