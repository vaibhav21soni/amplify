# 🚀 React Greeting App

<div align="center">

  <br>
  
  ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
  ![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-Ready-FF9900?style=for-the-badge&logo=aws-amplify)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

<p align="center">
  <i>A simple yet powerful React application demonstrating API interactions and dynamic content updates.</i>
</p>

---

## ✨ Features

- **🔄 Dynamic Greeting** - Update the greeting with a button click
- **🌐 API Integration** - Fetch greetings from a backend API
- **🔗 External Links** - Open backend endpoints in new tabs
- **📱 Responsive Design** - Works on desktop and mobile devices
- **⚡ Fast Loading** - Minimal dependencies for quick performance

---

## 📋 Table of Contents

- [Demo](#-demo)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---



## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/react-greeting-app.git
   cd react-greeting-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
react-greeting-app/
├── public/
│   ├── index.html         # HTML template
│   └── ...                # Other public assets
├── src/
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point
│   └── ...                # Other components and utilities
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | Ejects the create-react-app configuration (one-way operation) |

---

## 🌐 API Integration

The application integrates with a backend API to fetch dynamic greetings:

```javascript
const fetchGreeting = async () => {
  setLoading(true);
  try {
    const response = await fetch('http://100.25.217.223:5000/api/greeting');
    const data = await response.json();
    setGreeting(data.greeting);
  } catch (error) {
    setGreeting('Failed to fetch greeting.');
  } finally {
    setLoading(false);
  }
};
```

### API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/greeting` | Returns a greeting message |
| `/api/items` | Returns a list of items |

---

## 🚢 Deployment

This application is ready for deployment with AWS Amplify:

1. Connect your repository to AWS Amplify
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
3. Deploy your application

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Built with ❤️ using React and AWS Amplify</p>
</div>
