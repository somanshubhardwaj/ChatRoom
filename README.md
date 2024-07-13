
# Chat Application

This project is a simple chat application that allows users to join rooms and send messages in real-time. It utilizes Socket.IO for real-time web socket communication between clients and server, Express for handling HTTP requests, and React for the frontend user interface.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- Room support: Users can create or join rooms to have conversations in separate spaces.
- Dynamic message updates: The chat interface updates dynamically as new messages are sent or received.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Real-Time Communication:** Socket.IO
- **Styling:** Basic CSS

## Getting Started

To get the application running on your local machine, follow these steps:

### Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager) or Yarn

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/somanshubhardwaj/ChatRoom.git
   ```
2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```
3. Install the required dependencies for the server:
   ```
   npm install
   ```
4. Start the server:
   ```
   node server.js
   ```
5. Open another terminal window, navigate to the `client` directory (if separate), and install the required dependencies for the client:
   ```
   cd client
   npm install
   ```
6. Start the React application:
   ```
   npm start
   ```
7. The application should now be running on `http://localhost:3000` (or another port if 3000 is in use).

## Usage

- **Join a Room:** Enter a room name in the input field and click "Join Room" to enter a chat room.
- **Send a Message:** Type your message in the input field and click "Send" to send a message to the room.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.
