**Adventist Playlist Songs Mobile Application**

This web application is designed to provide a user-friendly interface for accessing and playing various Adventist songs. Below is a brief documentation on how the app works, including its main features and functionalities.

**Table of Contents**
- [Overview](#overview)
- [Header](#header)
- [Navigation Buttons](#navigation-buttons)
- [Footer](#footer)
- [Image Popup](#image-popup)
- [Responsive Design](#responsive-design)
- [Audio Player](#audio-player)
- [Slick Carousel](#slick-carousel)
- [Back Button](#back-button)
- [JavaScript Functions](#javascript-functions)

**Overview**
The application consists of a header, a container with navigation buttons, and a footer with a carousel of logos. It also includes an audio player for playing songs, and a popup for displaying images with descriptions.

**Header**
The header contains the title "SEVENTH-DAY ADVENTIST SONG" and is styled to be transparent with a drop shadow. It adjusts its font size based on the screen width for better responsiveness.

**Navigation Buttons**
The container includes navigation buttons that link to different types of songs:
- Special Song
- Hymnal Song
- Scriptured Song
- Adventist Youth Song
- Pathfinder Theme Song
- 1000 Missionary Song

➡ Clicking on these buttons will navigate the user to the respective song pages.

**Footer**
The footer contains a carousel with logos of various Adventist organizations. The logos can be clicked to display a popup with an enlarged image and a detailed description of the logo.

**Image Popup**
The image popup is a modal that displays an enlarged image along with a description. It can be closed by clicking the close button.

**Responsive Design**
The application is designed to be responsive, with media queries adjusting the font size of the header based on the screen width.

**Audio Player**
The audio player allows users to play, pause, and navigate through a playlist of songs. The current song's progress is displayed as a progress bar. When a song ends, the next song in the playlist is automatically played.

**Slick Carousel**
The carousel in the footer uses the Slick Carousel library to display logos in a sliding format. It is set to autoplay with a 2000ms interval, and includes navigation dots but no arrows.

**Back Button**
The application includes an event listener for the back button on mobile devices. If the user is on the homepage, the back button will exit the app. Otherwise, it will navigate back in the history.

**JavaScript Functions**
⦁ `adjustHeaderSize`
This function adjusts the font size of the header based on the screen width.

⦁ `playSong`
This function plays the song at the specified index in the playlist.

⦁ `showSongs`
This function displays a message indicating the type of songs being shown. Logic to fetch and display the songs can be added here.

⦁ `showImage`
This function displays the image popup with the selected image and description.

⦁ `closePopup`
This function closes the image popup.

⦁ `audioPlayer Event Listeners`
⦁ `timeupdate`: Updates the progress bar as the song plays.
⦁ `ended`: Plays the next song in the playlist when the current song ends.

⦁ `document Event Listeners`
⦁ `backbutton`: Handles the back button functionality on mobile devices.

**External Libraries and Resources**
⦁ jQuery: Used for DOM manipulation and event handling.
⦁ jQuery UI: Used for additional UI components and effects.
⦁ jQuery Mobile: Used for enhancing the mobile experience.
⦁ Slick Carousel: Used for creating the sliding carousel of logos.
⦁ CSS Libraries: Used for styling the application.

**How to Run the Application**
1. Ensure you have an internet connection to load the external libraries.
2. Open the `index.html` file in a web browser.
3. Navigate through the application using the buttons and interact with the audio player and carousel.

This documentation provides an overview of the main features and functionalities of the Adventist Playlist Songs Mobile Application. For any further customization or enhancement, refer to the respective libraries' documentation.
