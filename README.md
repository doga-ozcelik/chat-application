# Chat Application

## Project Overview

This project is a simple chat application built with React and TypeScript.

## Setup and Run Instructions

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

```bash
  https://github.com/berkpeker2707/WAIPE.git
```

2. Install dependencies:

```bash
  npm install
```

### Installation

To start the application in development mode, run:

```bash
  npm start
```

This will start the application and open it in your default browser at `http://localhost:3000`.

### Running Tests

To run the unit and integration tests:

```bash
  npm test
```

## Explanation of Key Design Decisions and Trade-offs

- **Component-Based Structure:** The application is designed using React components to ensure modularity and reusability. Each component handles a specific piece of functionality, making it easy to manage and extend.

- **TypeScript for Type Safety:** TypeScript is used to enforce type safety across the application. This helps in catching potential bugs during development and ensures better maintainability.

- **React Testing Library:** We chose React Testing Library for its simplicity and its ability to encourage testing the application from the user’s perspective. This aligns well with React’s component-driven architecture.

- **Separation of Concerns:** The application is divided into components, hooks, and tests, ensuring a clear separation of concerns. This makes the codebase easier to navigate and maintain.

## List of Third-Party Libraries Used and Justification for Each

- **React:** The core library for building the user interface.

- **TypeScript:** Used for adding static type definitions to JavaScript, improving code quality and maintainability.

- **React Testing Library:** Chosen for its focus on testing React components from the user's perspective.

- **Jest:** Used as the test runner, providing a comprehensive solution for unit and integration testing.

## Any Challenges Faced and How You Overcame Them

- **Implementing a Full-Height and Scrollable Chatbox:** Ensuring the chatbox filled the full height of the screen while being scrollable was challenging.

## Ideas for Future Improvements

- **Real-time Messaging:** Implement real-time message updates using WebSockets or Firebase to provide a more interactive user experience.

- **Improved Styling:** Enhance the UI by incorporating a modern design framework such as Tailwind CSS or Material-UI.

- **Advanced Input Features:** Add features like emoji support, markdown formatting, and file attachments to make the chat more versatile.
