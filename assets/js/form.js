// DARK MODE
// get reference to dark mode button
const darkModeButton = document.querySelector("#dark-mode-button");
// get reference to .container div
const container = document.querySelector(".container");

// set default mode to light
let mode = "light";

// create funtion to switch between light and dark mode
const switchDarkMode = function () {
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

// BLOG FORM
// get reference to blog form
const blogForm = document.forms.blogForm;

// get reference to input fields
const usernameInput = blogForm.username;
const titleInput = blogForm.title;
const contentInput = blogForm.content;

// get reference to #message <p>
const messageElement = document.querySelector("#message");

// create object to store blog inputs
const blogStorageObject = {
	username: "",
	title: "",
	content: "",
};

// function for submitting form
blogForm.onsubmit = function (event) {
	// prevent default behaviour
	// event.preventDefault();

	// reset #message innerHTML
	messageElement.innerHTML = "";

	// form validation checks
	if (usernameInput.value == "") {
		messageElement.innerHTML = `Please enter a valid Username`;
		return false;
	} else if (titleInput.value == "") {
		messageElement.innerHTML = `Please enter a valid Title`;
		return false;
	} else if (contentInput.value == "") {
		messageElement.innerHTML = `Please enter valid Content`;
		return false;
	}

	// store form input values in blogStorageObject
	blogStorageObject.username = usernameInput.value;
	blogStorageObject.title = titleInput.value;
	blogStorageObject.content = contentInput.value;

	console.log('blogStorageObject', blogStorageObject);

	// create array to store blogStorageObject(s)
	let existingBlogObjects = [];
	if (localStorage.getItem('existingBlogObjects')){
		existingBlogObjects = JSON.parse(localStorage.getItem('existingBlogObjects'));
	}

	// push new blog object onto array
	existingBlogObjects.push(blogStorageObject);
	console.log('existingBlogObjects', existingBlogObjects);

	// load array into localStorage
	localStorage.setItem('existingBlogObjects', JSON.stringify(existingBlogObjects));
	console.log('localStorage', localStorage);

	console.log("Form inputs are valid");

	window.location.pathname = "blog.html"
	return true;
};

// blogForm.onsubmit();