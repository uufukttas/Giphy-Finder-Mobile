# GIPHY FINDER APP

A simple mobile application that allows you to search for Giphy images and display them in real-time. This application uses React and Redux for state management and Axios for making HTTP requests to the Giphy API.

## Table of Contents

- [GIPHY FINDER APP](#giphy-finder-app)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)

## Tech Stack

- React Native
- Redux
- Axios
- Expo

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo.git
```

2. Change direction to the your clone repo directory.
```bash
cd your-repo
```

3. Install the dependencies:
```bash
npm install
```
4. Set up the Giphy API Key:    
 You'll need a Giphy API Key. You can get one by signing up at https://developers.giphy.com.
Create a .env file in the project root directory and add your API key:
```env
GIPHY_REQUEST_API_KEY=your-api-key-here
```

5. Start the development server:
```bash
npm start
```

6. You can see the application on expo or IOS Simulator, Android Simulator or real devices.

## Usage
* Uploaded the application to the mobile and you can see the screen on the device.
  
* In the input field, type a keyword to search for a Giphy image.

* Click the "Submit" button to initiate the search.

* The first Giphy image matching your keyword will be displayed on the screen.

* If you like the Giphy image and want to copy the link:
  * A "Copy Giphy URL" button will be displayed below the image. Touch the "Copy Giphy URL" button to copy the Giphy image link to your clipboard.

* If no Giphy image is found, a "Search for a Giphy" message will be shown.
