# Storage Project

## Overview

Storage is a platform for users to create projects which allows users who join to the projects for to upload and sharee files between contributes. This README provides an overview of the project's architecture, including the technologies used and instructions for setting up the development environment.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/nguyenduchuy71/Storage-App
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm start
```

## Features

- **User Authentication**: Secure user authentication ensures that only registered users can upload files by using the Firebase Authentication.
- **Responsive Design**: The application is styled with Bootstrap to ensure it looks great on all devices, from mobile phones to desktops.
- **State Management**: Redux Toolkit is used for efficient state management, ensuring smooth interaction and real-time updates across the application.
- **Firebase Storage**: Uploaded files are securely stored in Firebase Storage, leveraging its robust and scalable infrastructure.


## Technologies Used

### ReactJS

[ReactJS](https://reactjs.org/) is a popular JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React's component-based architecture makes it easy to build reusable UI components.

### Bootstrap

[Bootstrap](https://getbootstrap.com/) Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.

### Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.
### Firebase Storage

[Firebase Storage](https://firebase.google.com/products/storage) provides secure file uploads and downloads for Firebase apps. It is backed by Google Cloud Storage and offers robust and scalable object storage solutions. Firebase Storage is easy to integrate with other Firebase services and provides a simple and efficient way to handle user-generated content, such as photos and videos.
