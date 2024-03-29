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


// function to get and return array of blog objects from local storage
const getBlogStorageObjects = function () {
	return JSON.parse(localStorage.getItem('existingBlogObjects'));
};

// function to create new blog card
const createBlogCard = function (blogObject) {

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

	// add content from blogObject
	blogHeadingEl.innerHTML = blogObject.title;
	blogContentEl.innerHTML = blogObject.content;
	blogCreditEl.innerHTML = `Posted by: ${blogObject.username}`;

	// assemble blog card
	newBlogCardEl.appendChild(blogHeadingEl);
	newBlogCardEl.appendChild(blogContentEl);
	newBlogCardEl.appendChild(blogCreditEl);

	// return fully constructed blog card element
	return newBlogCardEl;

};

// function to paint new and old blog card(s) to page
const paintBlogCards = function () {

	// gets array of blog objects from localStorage
	let existingBlogObjects = getBlogStorageObjects();

	// check if there are items in localStorage
	if (localStorage.length > 0) {
		
		// iterate over objects and create and append blog cards to blog container
		for (let el of existingBlogObjects) {
			blogContainer.appendChild(createBlogCard(el));
		}

	}
};


// paints new and old blog card(s) to page
paintBlogCards();



