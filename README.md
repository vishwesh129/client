# ReactJS Single-Page Web Application README
This repository contains the code for a single-page web application built with ReactJS. The application features a simple form integrated with an external API and is designed to be responsive on various devices.

## Table of Contents
API Integration
Responsive Design
Validation
Getting Started
Usage
Contributing

## API Integration
## API Information
API Link: http://3.228.97.110:9000/api
API Documentation: http://3.228.97.110:9000/docs
Required Variable: email
Request Method: POST

## API Integration Use Cases
Empty Form Submission: Empty form submission is not allowed, and validation is implemented at the front-end to prevent it.

Email Validation: Email validation is performed at the front-end to ensure that the entered email is in the correct format.

API Error Handling: If the email provided ends with "@ez.works," the API will return a response code of 422, and this error will be displayed inside the form field.

Successful Form Submission: When the form is submitted successfully, the API will return a 200 response, and the message "Form Submitted" will be displayed in the text field.

## Responsive Design
The application is designed to be responsive on the following devices:

Mobile View (480p)
720p
1080p
iPad (2732x2048)
MacBook (1440x823)
The responsive design ensures that the application's layout and content adapt to different screen sizes and orientations for a seamless user experience.

## Validation
Validation is implemented at the front-end to ensure data integrity and provide a smooth user experience. The following validation rules are applied:

Empty Form Submission is not allowed.
Email Validation is performed to check for correct email format.
API Error Handling: Display an error message if the email ends with "@ez.works."
Successful Form Submission: Display "Form Submitted" upon successful submission.

## Getting Started
To run this application locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Start the development server using npm start.
Open your web browser and access the application at http://localhost:3000.

## Usage
1. Access the application using the provided URL.
2. Fill out the form with your email address.
3. Ensure that you meet the validation criteria mentioned above.
4. Submit the form.
5. Observe the response message based on the API integration and validation.

   
## Contributing
Contributions to this project are welcome. To contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your fork.
Create a pull request to merge your changes into the main repository.
