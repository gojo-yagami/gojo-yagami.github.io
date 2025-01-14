// Function to generate the WhatsApp QR code for pairing
function generateQRCode() {
    const phoneNumber = document.getElementById("phone-number").value.trim();

    // Validate the phone number
    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number in international format (e.g., +94712345678).");
        return;
    }

    const message = "Hello, I want to connect with you!"; // Optional: add a custom message to start the chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Show QR code container
    const qrContainer = document.getElementById("qr-container");
    qrContainer.style.display = "block";

    // Generate the QR code
    document.getElementById("qr-code").src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=300x300`;

    // Simulate scanning the QR code
    simulateQRCodeScan(phoneNumber);
}

// Function to validate the phone number
function isValidPhoneNumber(phoneNumber) {
    // Regex to allow international format (e.g., +94712345678)
    const phoneRegex = /^\\+94[0-9]{9}$/; // Matches +94 followed by exactly 9 digits
    return phoneRegex.test(phoneNumber);
}

// Simulate QR Code Scan and send a session start request
function simulateQRCodeScan(phoneNumber) {
    setTimeout(() => {
        alert("QR Code scanned successfully!");

        // Send session start request to the backend
        startSession(phoneNumber);
    }, 5000); // Simulate a 5-second delay for scanning
}

// Function to send a session start request to the backend
async function startSession(phoneNumber) {
    try {
        const response = await fetch("/start-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(`Session started: ${data.sessionId}`);
        } else {
            console.error("Error starting session:", data.message);
        }
    } catch (error) {
        console.error("Failed to connect to the backend:", error);
    }
}

// Add event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQRCode);
