// DARK MODE
// get reference to dark mode button
const darkModeButton = document.querySelector("#dark-mode-button");

// create funtion to switch between light and dark mode
const switchDarkMode = function () {
	document.documentElement.setAttribute('style', 'background: rgb(18 18 18); color: rgb(226, 215, 215);');
};

// create event listener for dark mode button
darkModeButton.addEventListener('click', switchDarkMode);

// BACK BUTTON
// get reference to #back-button
const backButton = document.querySelector("#back-button");

// create function to change location to index.html
const backToIndex = function () {
	window.location.href = "index.html";
};

// create event listener for back button
backButton.addEventListener('click', backToIndex);

// BLOG CARDS
// get reference to #blog-container
const blogContainer = document.querySelector("#blog-container");

// create object to store blog inputs
let blogStorageObject = {
	username: "",
	title: "",
	content: "",
};

// function to get new blog object from local storage
const getBlogStorageObject = function () {
	blogStorageObject = JSON.parse(localStorage.getItem(blogStorageObject));
	console.log('blogStorageObject', blogStorageObject);
};

// function to create and append new blog card
// TODO: alter function to receive an array of storage objects with an index for a parameter
const createBlogCard = function () {
	// gets new object from localStorage
	getBlogStorageObject();

	// create necassary elements
	const newBlogCardEl = document.createElement("article");
	const blogHeadingEl = document.createElement("h2");
	const blogContentEl = document.createElement("p");
	const blogCreditEl = document.createElement("p");

	// assign classes for styling
	newBlogCardEl.className = "blog-card";
	blogHeadingEl.className = "blog-heading";
	blogContentEl.className = "blog-content";
	blogCreditEl.className = "blog-credit";

	// add content from blogStorageObject
	blogHeadingEl.innerHTML = blogStorageObject.title;
	blogContentEl.innerHTML = blogStorageObject.content;
	blogCreditEl.innerHTML = `Posted by: ${blogStorageObject.username}`;

	// assemble blog card
	newBlogCardEl.appendChild(blogHeadingEl);
	newBlogCardEl.appendChild(blogContentEl);
	newBlogCardEl.appendChild(blogCreditEl);

	// append to the #blog-container
	blogContainer.appendChild(newBlogCardEl);

};


// creates blog card from blogStorageObject data
createBlogCard();

// 



