# BlogSpace

![BlogSpace](https://img.shields.io/badge/BlogSpace-1.0.0-purple)

<video src="https://github.com/user-attachments/assets/60f7dac3-6489-480a-a3aa-e5bc44ae2593" controls></video>

A modern, responsive blogging platform built with React and Vite. BlogSpace allows users to read, create, and manage blog posts with a beautiful and intuitive interface.

## Features

- **Beautiful UI**: Modern, responsive design with smooth animations
- **Authentication**: User login and session management
- **Blog Management**: Read, create, edit, and delete blog posts
- **Categories**: Browse blogs by category
- **Search Functionality**: Find blogs by keyword
- **User Profiles**: View author information

## Tech Stack

- **Frontend**: React 19 with hooks
- **Routing**: React Router DOM v7
- **Build Tool**: Vite 7
- **Authentication**: Custom auth context with localStorage persistence
- **Styling**: Pure CSS with CSS variables for theming

## Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # Reusable UI components
│   ├── common/      # Shared components (buttons, cards, etc.)
│   └── layout/      # Layout components (header, footer, etc.)
├── context/         # React context providers
├── data/            # Mock data for development
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── styles/          # Global styles and variables
└── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd blogspace
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` directory.

## Usage

### User Authentication

- **Login**: Use the following demo credentials:
  - Email: john@example.com
  - Password: password123

### Blog Navigation

- Browse all blogs on the home page
- Filter blogs by category using the category filter
- Click on a blog card to view the full blog (requires login)
- Use the search bar in the header to find blogs by keyword

## Development

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run preview`: Preview the production build locally

### Current Limitations

- This is a frontend-only application using mock data
- Authentication is simulated with localStorage
- Blog creation functionality is not yet fully implemented

## Future Enhancements

- Backend API integration
- User registration
- Social sharing functionality
- Comment system
- Rich text editor for blog creation
- User profile management

## License

This project is licensed under the MIT License.
