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
blogForm.onsubmit = function() {
	// debug logs
	// console.log(usernameInput.value);
	// console.log(titleInput.value);
	// console.log(contentInput.value);

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

	console.log(blogStorageObject);

	// load blogStorageObject to localStorage
	localStorage.setItem(blogStorageObject, JSON.stringify(blogStorageObject));

	console.log(localStorage);

	console.log("Form inputs are valid");

	window.location.pathname = "blog.html"
	return true;
};

// blogForm.onsubmit();