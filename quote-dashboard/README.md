# Quote Dashboard

## Overview
The Quote Dashboard is a web application designed for organizations to generate and manage quotes for their clients. It provides a user-friendly interface for managing company information, products, and quotes, allowing users to efficiently create, view, and filter quotes.

## Features
- **Company Management**: Upload and manage company logos and settings.
- **Product Listings**: View and manage a list of products available for quoting.
- **Quote Management**: Create, edit, and save quotes with a preview feature.
- **Filters**: Filter quotes and products based on various criteria.
- **User Authentication**: Secure login for users to access their dashboards.

## Project Structure
```
quote-dashboard
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── App.tsx           # Main application component with routing
│   ├── index.css         # Global styles
│   ├── components         # Reusable components
│   ├── pages              # Different pages of the application
│   ├── services           # API and service functions
│   ├── stores             # State management hooks
│   ├── hooks              # Custom hooks for data fetching and filters
│   ├── types              # TypeScript types for the application
│   └── utils              # Utility functions
├── public
│   ├── index.html        # Main HTML file
│   └── assets
│       └── logos         # Directory for company logos
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd quote-dashboard
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.