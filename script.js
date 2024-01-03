function generateQR() {
    const linkInput = document.getElementById('linkInput').value;
    const qrCode = document.getElementById('qrCode');

    // Validate the link (you might want to use a more thorough validation)
    if (linkInput.trim() !== '') {
        // Display a visual representation (not a scannable QR code)
        qrCode.style.backgroundImage = `url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(linkInput)}')`;
        qrCode.style.display = 'block';
    }
}
