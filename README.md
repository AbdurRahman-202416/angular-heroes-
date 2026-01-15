# 🦸 Angular Heroes

A simplified, educational Angular application for managing superheroes, specifically designed for junior developers to learn core Angular concepts. This project demonstrates CRUD functionality using traditional Angular patterns.

![Angular](https://img.shields.io/badge/Angular-19.2.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 🎯 Project Goals

This project has been intentionally structured to be **easy to understand** for beginners:
- **Angular 19.2.0**: Uses a stable, widely-used version of Angular.
- **Simplified Code**: Complex features like Signals, Resources, and SSR have been replaced with traditional, easy-to-follow patterns (Observables, Services, standard Dependency Injection).
- **Clean Structure**: No distractions—comments and unused test files have been removed to focus purely on the application logic.

## ✨ Features

- 📊 **Dashboard** - View top 5 heroes with beautiful gradient cards.
- 📋 **Heroes List** - Browse all heroes with ID badges.
- ✏️ **Edit Heroes** - Update hero names with real-time validation.
- 🔄 **RESTful API** - Full integration with a local `json-server` backend.
- 🎨 **Modern UI** - Responsive design with smooth transitions and hover effects.
-  **Responsive** - Works seamlessly on desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.dev/tools/cli) (v19 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdurRahman-202416/angular-heroes.git
   cd angular-heroes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install json-server globally** (if not already installed)
   ```bash
   npm install -g json-server
   ```

### Running the Application

You need to run **two servers** simultaneously (in separate terminal windows):

#### Terminal 1: Start the API Server
This mimics a real backend database.
```bash
npm run server
```
*Runs on: `http://localhost:3000`*

#### Terminal 2: Start the Angular App
This starts the frontend application.
```bash
npm start
```
*Runs on: `http://localhost:4200`*

### Access the Application

Open your browser and navigate to:
```
http://localhost:4200
```

## 📁 Project Structure

```
angular-heroes/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── hero.model.ts          # Hero data interface
│   │   ├── services/
│   │   │   └── hero.service.ts        # API communication (HTTP calls)
│   │   ├── pages/
│   │   │   ├── dashboard/             # Top heroes view
│   │   │   ├── heroes-page/           # List of all heroes
│   │   │   └── hero-detail/           # Edit hero details
│   │   ├── app.routes.ts              # Routing configuration
│   │   ├── app.config.ts              # App providers setup
│   │   └── app.ts                     # Root component
│   └── styles.scss                    # Global styles
├── db.json                            # Mock database
├── package.json                       # Dependencies
└── README.md                          # Documentation
```

## 🛠️ Technologies Used

- **[Angular 19](https://angular.dev/)** - The core framework.
- **[TypeScript](https://www.typescriptlang.org/)** - For type-safe code.
- **[RxJS](https://rxjs.dev/)** - For handling asynchronous data (Observables).
- **[json-server](https://github.com/typicode/json-server)** - For a quick and easy REST API.
- **[SCSS](https://sass-lang.com/)** - For modular and powerful styling.

## 📚 API Endpoints

The `json-server` provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/heroes` | Get all heroes |
| GET | `/heroes/:id` | Get hero by ID |
| POST | `/heroes` | Create a new hero |
| PUT | `/heroes/:id` | Update hero by ID |
| DELETE | `/heroes/:id` | Delete hero by ID |

## 🎯 Usage Guide

### View Dashboard
Navigate to the home page to see the top 5 heroes displayed in gradient cards.

### Browse All Heroes
Click on "Heroes" in the navbar to view the complete list of heroes.

### Edit a Hero
1. Click on any hero card or list item.
2. You'll be taken to the hero detail page.
3. Edit the hero name in the input field.
4. Click "Save" to persist changes.
5. You will be redirected back after a successful save.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Angular CLI](https://github.com/angular/angular-cli)
- Inspired by the [Angular Tour of Heroes tutorial](https://angular.dev/tutorial/tour-of-heroes)
- API powered by [json-server](https://github.com/typicode/json-server)
