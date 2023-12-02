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





