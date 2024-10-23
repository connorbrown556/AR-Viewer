// AR.js auto-detects camera, you don't need additional setup for QR scanning

// This script manages the model anchoring, as AR.js uses the marker (QR) for initial placement.
// Once the marker is detected, the model will remain in place even if the marker moves out of view.
window.onload = () => {
    const model = document.getElementById('myModel');
    
    // Optional: If you want to handle interactions with the model (like rotation or scaling):
    model.addEventListener('click', () => {
        // Example interaction: rotate the model
        model.setAttribute('rotation', {x: 0, y: model.getAttribute('rotation').y + 45, z: 0});
    });

    // Handling any additional functionality can be added here (like multiple models or more complex interactions).
};
