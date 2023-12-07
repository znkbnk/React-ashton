Lesson 1:

Step 1: Setup and Dependencies

Make sure you have React, Route, Routes, NavLink, BrowserRouter installed in your project. 

Step 2: Create Components

Create your React components for Home.js, Services.js, Aprovals.js, and Legals.js (as an example for now)

Step 3: CSS Styles

Add some basic styles for your navbar in a separate CSS file (e.g., Navbar.css)

Step 4: Navbar Component

Import React and useState.
Create the Navbar functional component.
Define state for showNavBar using useState.
Define the function to handle the toggle.
Toggle the value of showNavBar using setShowNavbar.
Return the JSX for the Navbar component.
Add a tag <i>/button that triggers the handleShowNavbar function.
Conditionally render the Navbar based on the showNavBar state.

Step 5: Integration

Import and use your Navbar component in your main application file (App.js) and test the functionality.


Lesson 2:


Step 1: Get code from codepen.io

Go to https://codepen.io/kodplay
Create Cards.css file.
Integrate code from codepen into your project.
Make some modifications ( if you need ).

Step 2: Update your return statement

Import Cards.css in Home.js
Add List Items (<li>).
Add Content Container and include className.
Add Heading 2 (<h2>).
Add Paragraph (<p>) and text to it.
Add Link (<NavLink>).

Step 3: Update Navbar.js

Create the handleCloseNavbar function to set showNavBar to false to close the navbar.
Dont forget to include onClick={handleCloseNavbar} within your NavLink's.
Use the useEffect hook to add an event listener for clicks outside the navbar to hide the navbar on small screen:
1. Define handleOutsideClick function.
2. Get references to elements: Use document.querySelector to get references to the .navbar and .nav-elements elements.
3. Check for outside click: Use contains method to check if the click target is not inside the navbar or navElements.
4. Close the navbar: If the click is outside and the navbar is visible, call the handleCloseNavbar function to close the navbar.
5. Add event listener: When the component mounts, add a click event listener to the document that will trigger the handleOutsideClick function.
6. Remove event listener: When the component unmounts.
7. Dependency array: The useEffect hook is set to run whenever the showNavBar state changes.
Update the div with the class "nav-elements" by adding an onClick event with the handler named "handlerClosenavbar".


Lesson 3:

Step 1: Dynamic Content

Generate a new file named data.js. 
Initializ an Array of Objects.
Each object in the array will represent the content for a specific section or component on the website.
Transfer all content/text from the Home.js file to the data.js file.

Step 2: Update Home.js

Below your <ul className='cards-container'> use the .map method on the sections prop to iterate over each section.
For each section, you create an li element with a unique key based on the index and a cards class.
Within each li, you have a div with a content class.
Inside the content div, you have an h2 for the section title, a p for the description, and a NavLink for reading more.
When employing React Router's NavLink, you specify the destination using the "to" prop along with a "navlink" class.

Step 3: Create SearchResults.js

Define the Functional Component that takes a prop named results. (use curly braces for the prop).
In the return statement .map through results array.
Display title <h3> of each result and content <p> of each result.
Add <hr /> horizontal line between each result for better visual separation. ( for now ).

Step 4: Update App.js file

Replace BrowserRouter with a div tag, and in your index.js file, encompass your App component within BrowserRouter.
Create state for search results.
Create a navigation function.
Define a function to handle search results, use results as an argument, navigate to the SearchResults route.
Use the Navbar Component while passing the handleSearch function to the setSearchResults prop.
Define route for SearchResults component, pass a prop named results with the value of searchResults.
Add more Components and Routes...

Step 5: Create SearchBar Component

Set up the initial state for the search term.
Define a function to handle the search. 
Map through sections to filter based on the search term.
Inside .map extract and filter content from each section. ( this one is very tricky, use React.Children.toArray ( check data.js file why) ).
Inside .filter check if the child is a string and includes the search term (dont forget about toLowerCase()).
Recursively check children if it's a React element (This one is tricky aswell, this is where I spent most of the time).
If there are matching paragraphs, create a new section with filtered content.
No matching paragraphs, return null.
Remove null entries from the array.
Pass the search results to the parent component.
Clear the search term.
Render the search bar component, create input field for entering the search term and button to trigger the search.











