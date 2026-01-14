# 🦸 Angular Heroes

A modern Angular application for managing superheroes with full CRUD functionality, built with Angular 21 and json-server.

![Angular](https://img.shields.io/badge/Angular-21.0.5-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- 📊 **Dashboard** - View top 5 heroes with beautiful gradient cards
- 📋 **Heroes List** - Browse all heroes with ID badges and smooth animations
- ✏️ **Edit Heroes** - Update hero names with real-time validation
- 🔄 **RESTful API** - Full integration with json-server backend
- 🎨 **Modern UI** - Responsive design with smooth transitions and hover effects
- 🚀 **Angular Signals** - Reactive state management with the latest Angular features
- 📱 **Responsive** - Works seamlessly on desktop and mobile devices

## 🖼️ Screenshots

### Dashboard
The dashboard displays the top 5 heroes in colorful gradient cards.

### Heroes List
Browse all heroes with a clean, organized list view featuring ID badges.

### Hero Detail & Edit
View and edit individual hero details with an intuitive interface.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.dev/tools/cli) (v21 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/angular-heroes.git
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

You need to run **two servers** simultaneously:

#### Terminal 1: Start the API Server (json-server)
```bash
json-server --watch db.json --port 3000
```

This starts the REST API on `http://localhost:3000`

#### Terminal 2: Start the Angular Development Server
```bash
npm start
# or
ng serve
```

This starts the Angular app on `http://localhost:4200`

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
│   │   │   └── hero.model.ts          # Hero interface
│   │   ├── services/
│   │   │   └── hero.service.ts        # API service
│   │   ├── pages/
│   │   │   ├── dashboard/             # Dashboard component
│   │   │   ├── heroes-page/           # Heroes list component
│   │   │   └── hero-detail/           # Hero detail & edit component
│   │   ├── app.routes.ts              # Application routes
│   │   └── app.config.ts              # App configuration
│   └── styles.scss                     # Global styles
├── db.json                             # JSON database for heroes
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **[Angular 21](https://angular.dev/)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[RxJS](https://rxjs.dev/)** - Reactive programming library
- **[json-server](https://github.com/typicode/json-server)** - Full fake REST API
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor
- **Angular Signals** - Reactive state management
- **Angular Router** - Client-side routing
- **FormsModule** - Two-way data binding

## 📚 API Endpoints

The json-server provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/heroes` | Get all heroes |
| GET | `/heroes/:id` | Get hero by ID |
| POST | `/heroes` | Create a new hero |
| PUT | `/heroes/:id` | Update hero by ID |
| DELETE | `/heroes/:id` | Delete hero by ID |

## 🎯 Usage

### View Dashboard
Navigate to the home page to see the top 5 heroes displayed in gradient cards.

### Browse All Heroes
Click on "Heroes" in the navbar to view the complete list of heroes.

### Edit a Hero
1. Click on any hero card or list item
2. You'll be taken to the hero detail page
3. Edit the hero name in the input field
4. Click "Save" to persist changes
5. See a success message confirming the update

### Navigate Back
Use the "Go Back" button or browser back button to return to the previous page.

## 🏗️ Building for Production

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 🎨 Customization

### Modify Hero Data
Edit the `db.json` file to add, remove, or modify heroes:

```json
{
  "heroes": [
    {
      "id": 12,
      "name": "Dr. Nice"
    },
    {
      "id": 13,
      "name": "Bombasto"
    }
  ]
}
```

### Styling
- Global styles: `src/styles.scss`
- Component styles: Each component has its own `.scss` file

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

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/angular-heroes](https://github.com/yourusername/angular-heroes)

---

⭐ **Star this repo** if you find it helpful!
# angular-heroes-
