# BartersHub

Welcome to BartersHub! This project aims to create a platform where users can exchange goods or services with one another through a barter system.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction
BartersHub provides a platform for users to trade goods or services without the need for traditional currency. It facilitates the process of bartering by connecting users who have items or skills to offer with those who are seeking them. Whether you're looking to trade items, skills, or services, BartersHub provides a convenient platform to do so.

## Features
- **User Authentication:** Secure user authentication system using JWT (JSON Web Tokens) for authentication.
- **Listing Items/Services:** Users can create listings for items or services they are offering for barter.
- **Search and Filter:** Users can search for specific items or services and filter results based on various criteria.
- **Messaging System:** Built-in messaging system for users to communicate and negotiate terms of the barter.
- **Rating and Feedback:** Users can rate and leave feedback for each other based on their bartering experience.
- **Responsive Design:** The platform is designed to be responsive and accessible across different devices.

## Installation
To run BartersHub locally, follow these steps:
1. Clone the repository: `git clone https://github.com/Rahulki/BartersHub.git`
2. Navigate to the project directory: `cd BartersHub`
3. Install dependencies:
   - For the server directory: `cd server && npm install`
   - For the UI directory: `cd UI && npm install`
4. Start the server: `npm start` (inside the server directory)
5. Start the UI: `npm start` (inside the UI directory)
6. Access the application in your browser at `http://localhost:3000`

## Usage
1. Sign up for an account or log in if you already have one.
2. Explore listings to find items or services you're interested in.
3. Contact other users through the messaging system to initiate a barter.
4. Negotiate terms and finalize the exchange.
5. Once the barter is complete, leave feedback and ratings for the other user.

## Technologies Used
- **Main Technologies:**
  - **MERN Stack:** MongoDB, Express.js, React.js, Node.js
  - **Authentication:** JWT (JSON Web Tokens)
  - **Password Hashing:** Bcrypt

## Environment Variables
Ensure you have the following environment variables set:
- `DB_CONNECTION`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication

## Team Members
- **Rahul Odedara (Team Lead)**
- Tanvir Bhatti
- Parth Patel
- Vikas Ghelani
- Shivedeep Singh

## Mentor
- Harsh Barot

## Contributing
Contributions are welcome! If you would like to contribute to BartersHub, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.
