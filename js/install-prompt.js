let deferredPrompt;
const installButton = document.createElement('button');
installButton.style.position = 'fixed';
installButton.style.bottom = '20px';
installButton.style.left = '50%';
installButton.style.transform = 'translateX(-50%)';
installButton.style.zIndex = '1000';
installButton.style.padding = '10px 20px';
installButton.style.backgroundColor = '#007bff';
installButton.style.color = 'white';
installButton.style.border = 'none';
installButton.style.borderRadius = '5px';
installButton.style.cursor = 'pointer';
installButton.textContent = 'Install App';
installButton.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show the install button
    installButton.style.display = 'block';
    
    // Add click event to the install button
    installButton.addEventListener('click', async () => {
        // Hide the install button
        installButton.style.display = 'none';
        
        // Show the prompt
        if (deferredPrompt) {
            deferredPrompt.prompt();
            
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            
            // Clear the deferredPrompt
            deferredPrompt = null;
        }
    });
    
    // Append the button to the body
    document.body.appendChild(installButton);
});

// Handle app installation
window.addEventListener('appinstalled', (evt) => {
    console.log('App installed successfully');
    // Hide install button after successful installation
    installButton.style.display = 'none';
});
