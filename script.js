<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Pairing</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Scan to Pair with WhatsApp</h1>
    <p>Use WhatsApp to scan the QR code and pair with our number.</p>

    <div id="input-container">
        <input type="text" id="phone-number" placeholder="Enter phone number" />
        <br>
        <button id="generate-btn">Generate QR Code</button>
    </div>

    <div id="qr-container" style="display: none;">
        <img id="qr-code" src="" alt="WhatsApp QR Code" />
    </div>

    <footer>
        &copy; 2025 WhatsApp Pairing Service. All Rights Reserved.
    </footer>

    <script src="script.js"></script>
</body>
</html>
