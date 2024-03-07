// DARK MODE
// get reference to dark mode button
const darkModeButton = document.querySelector("#dark-mode-button");
// get reference to .container div
const container = document.querySelector(".container");

// set default mode to light
let mode = "light";

// create funtion to switch between light and dark mode
const switchDarkMode = function () {

	// check for current mode, switch it and then alter classList of container for the new theme
	if (mode === "light") {
		mode = 'dark';
		container.classList = "container dark";
	} else if (mode === "dark") {
		mode = 'light';
		container.classList = "container light";
	}
};

// create event listener for dark mode button
darkModeButton.addEventListener('click', switchDarkMode);
