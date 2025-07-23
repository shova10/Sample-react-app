React Multi-Page App with React Router

This repository contains a simple, yet illustrative, multi-page React application built to demonstrate the fundamental concepts of client-side routing using react-router-dom. The application features a clean, responsive layout and includes several distinct pages: Home, About, Contact, and a dynamic Postlist page that fetches data from an external API.

Features

    Multi-page Navigation: The application provides smooth and efficient navigation between different sections without full page reloads, characteristic of Single Page Applications (SPAs), leveraging client-side routing.

    React Router Integration: react-router-dom is at the core of this application, managing routes and rendering the appropriate components based on the URL.

    Dynamic Content Fetching: The "Postlist" page showcases how to fetch and display dynamic data from a public API (JSONPlaceholder), providing a practical example of useEffect for data fetching.

    Custom 404 Page: An elegant custom 404 "Page Not Found" component is implemented to handle invalid or unhandled routes, enhancing user experience.

    Modular Component Structure: The application is organized into separate components for each page (Home, About, Contact, Postlist), promoting reusability and maintainability.

    Basic Styling: Simple inline styling and a dedicated App.css file provide a clean and readable user interface.

Screenshots
Home Page

<img width="1326" height="576" alt="RA1" src="https://github.com/user-attachments/assets/4158107b-270f-46de-b79a-80bd2c7f16f9" />

Displays a welcome message and serves as the entry point of the application.

About Page

<img width="1314" height="586" alt="RA2" src="https://github.com/user-attachments/assets/7048e02e-dc1b-4ac6-a90b-cea1704b7715" />

Provides information about the application and how React Router works.

Contact Page

<img width="1268" height="577" alt="RA3" src="https://github.com/user-attachments/assets/76f735ed-8aca-4913-9235-1284f5c6e734" />

Includes contact information for the application.

Postlist Page

<img width="1315" height="631" alt="RA4" src="https://github.com/user-attachments/assets/0baf9a8b-f263-4d81-ab7e-85ad817b2c8e" />

Demonstrates fetching and displaying a list of posts from JSONPlaceholder.


After the "Screenshots" section, you should typically include information about how to get the project up and running. This usually involves sections like:

    Technologies Used

    Installation

    Usage

    Contributing (Optional)

    License

Here's how you can structure it, along with the content for each section based on your provided code:

Screenshots

Home Page

Displays a welcome message and serves as the entry point of the application.

About Page

Provides information about the application and how React Router works.

Contact Page

Includes contact information for the application.

Postlist Page

Demonstrates fetching and displaying a list of posts from JSONPlaceholder.

Technologies Used

    React: A JavaScript library for building user interfaces.

    React Router DOM: Declarative routing for React.

    JSONPlaceholder: A free fake API for testing and prototyping (used for the Postlist page).

    CSS: For basic styling.

Install dependencies:
Bash

npm install
# or if you use yarn
# yarn install



