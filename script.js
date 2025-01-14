// Function to generate the WhatsApp QR code for pairing
function generateQRCode() {
    const phoneNumber = document.getElementById("phone-number").value.trim();
    if (!phoneNumber) {
        alert("Please enter a valid phone number.");
        return;
    }

    const message = "Hello, I want to connect with you!"; // Optional: add a custom message to start the chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Generating the QR code using the API
    document.getElementById("qr-code").src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=300x300`;
}

// Add event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQRCode);
