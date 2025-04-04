function showSongs(type) {
    const songsList = document.getElementById('songs-list');
    songsList.innerHTML = `<p>Displaying ${type} songs...</p>`;
    // Add logic to fetch and display the songs based on the type
}

function showImage(src, description) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');
    popupImage.src = src;
    popupDescription.textContent = description;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('image-popup');
    popup.style.display = 'none';
}

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });
});

// Detect platform and enable Bluetooth sharing
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function enableBluetoothSharing() {
    if (navigator.bluetooth) {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        })
        .then(device => {
            console.log('Connected to device:', device.name);
            // Add logic to share data via Bluetooth
        })
        .catch(error => {
            console.error('Bluetooth connection failed:', error);
        });
    } else {
        console.error('Bluetooth API not supported.');
    }
}

