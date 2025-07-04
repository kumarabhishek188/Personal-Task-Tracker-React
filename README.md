# Task Tracker - Personal Task Management Application

A modern, responsive React application for personal task management with a beautiful UI and intuitive user experience.

## 🚀 Features

### ✅ Core Features
- **Simple Login System**: Username-based authentication with localStorage persistence
- **Task Management**: Add, edit, delete, and toggle completion status
- **Task Display**: Show title, description, creation date, and completion status
- **Task Filtering**: Filter by All, Pending, and Completed tasks with counts
- **Search Functionality**: Search tasks by title or description
- **Task Priority Levels**: High, medium, low priority system
- **Due Dates**: Add deadlines to tasks
- **Task Categories/Tags**: Organize tasks by categories
- **Dark Mode Toggle**: Switch between light and dark themes
- **Keyboard Shortcuts**: Quick actions with keyboard
- **Export/Import**: Backup and restore task data
- **Data Persistence**: All data saved to localStorage and persists after page refresh

### 🎨 UI/UX Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Visual Feedback**: Hover effects, transitions, and interactive elements
- **Empty States**: Helpful messages when no tasks are present
- **Confirmation Dialogs**: Safe deletion with confirmation prompts

### 🛠 Technical Features
- **React Hooks**: Functional components with useState and useEffect
- **Component Architecture**: Modular, reusable components
- **Local Storage**: Client-side data persistence
- **CSS3**: Modern styling with gradients, shadows, and animations
- **Responsive CSS**: Mobile-first approach with breakpoints

## 📁 Project Structure

```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js           # Login component
│   │   ├── TaskForm.js        # Add/Edit task form
│   │   ├── TaskItem.js        # Individual task display
│   │   ├── TaskList.js        # Task list with filtering
│   │   └── TaskFilter.js      # Filter tabs component
│
│   ├── styles/
│   │   ├── Login.css          # Login styles
│   │   ├── TaskForm.css       # Task form styles
│   │   ├── TaskItem.css       # Task item styles
│   │   ├── TaskList.css       # Task list styles
│   │   ├── TaskFilter.css     # Filter styles
│   │   └── mobile.css         # Global mobile responsiveness
│
│   ├── utils/
│   │   └── localStorage.js    # Local storage utilities
│
│   ├── App.js                 # Main application component
│   ├── App.css                # Main application styles
│   ├── index.js               # Application entry point
│   └── index.css              # Global styles
│
├── README.md
├── .gitignore
├── package.json
└── package-lock.json

```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 How to Use

### 1. Login
- Enter any username to get started
- No real authentication required - just for personalization

### 2. Add Tasks
- Click the "+ Add Task" button
- Fill in the task title (required) and description (optional)
- Click "Add Task" to save

### 3. Manage Tasks
- **Complete**: Check the checkbox to mark as completed
- **Edit**: Click the edit button (✏️) to modify task details
- **Delete**: Click the delete button (🗑️) and confirm deletion

### 4. Filter Tasks
- Use the filter tabs to view:
  - **All**: All tasks
  - **Pending**: Incomplete tasks
  - **Completed**: Finished tasks
- Each filter shows the count of tasks

### 5. View Statistics
- Task counts are displayed at the top of the task list
- Shows total, pending, and completed task numbers

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to blue gradient (#667eea to #764ba2)
- **Background**: Gradient background for visual appeal
- **Cards**: White cards with subtle shadows
- **Text**: Dark gray (#4a5568) for readability

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted layout)
- **Mobile**: <768px (stacked layout)

### Animations
- Smooth hover effects on cards and buttons
- Slide-in animations for new tasks
- Transform effects on interactive elements

## 🔧 Technical Implementation

### State Management
- Uses React's built-in useState and useEffect hooks
- No external state management libraries
- Local storage for data persistence

### Component Architecture
- **App.js**: Main container with routing logic
- **Login.js**: Authentication component
- **TaskForm.js**: Reusable form for add/edit operations
- **TaskItem.js**: Individual task display with actions
- **TaskList.js**: Task collection with filtering logic
- **TaskFilter.js**: Filter tabs component



## 🔗 Live Demo
[Click here to view the deployed application](personal-task-tracker-react.vercel.app)



## 🖼 Screenshots:

<img width="1440" alt="Login page" src="https://github.com/user-attachments/assets/9bb357b2-4d9a-4ccd-b521-a4c9fe9590e1" />

<img width="1440" alt="Add New Task" src="https://github.com/user-attachments/assets/513c5bcc-edaf-4724-864e-50a63083bc9d" />

<img width="1440" alt="Frontend UI" src="https://github.com/user-attachments/assets/56bf4c5e-0c0b-4c50-86ee-387e8a3e800d" />

<img width="1440" alt="Dark Mode" src="https://github.com/user-attachments/assets/e0e434b0-9b7d-4658-be16-ab09e11f2015" />

<img width="1440" alt="Edit Task" src="https://github.com/user-attachments/assets/0c2b97f4-5abd-466f-aa6f-268f81c29b42" />

<img width="1440" alt="Delete Task" src="https://github.com/user-attachments/assets/3d7aa0d3-ea2f-4739-b511-f58e4efd8b50" />


## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
