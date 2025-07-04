import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import SearchBar from './components/SearchBar';
import DarkModeToggle from './components/DarkModeToggle';
import MobileOptimizations from './components/MobileOptimizations';
import { loadTasks, saveTasks, loadUser, saveUser, clearUser } from './utils/localStorage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load user and tasks on component mount
  useEffect(() => {
    const savedUser = loadUser();
    const savedDarkMode = localStorage.getItem('task-tracker-dark-mode') === 'true';
    
    console.log('Loading from localStorage:', { savedUser, savedDarkMode });
    
    if (savedUser) {
      setUser(savedUser);
      // Load tasks for the specific user
      const userTasks = loadTasks(savedUser);
      setTasks(userTasks);
    }
    setIsDarkMode(savedDarkMode);
  }, []);

  // Save tasks whenever they change (only if user is logged in)
  useEffect(() => {
    if (user && tasks.length >= 0) {
      console.log('Saving tasks to localStorage for user:', user, tasks);
      saveTasks(tasks, user);
    }
  }, [tasks, user]);

  const handleLogin = (username) => {
    console.log('User logging in:', username);
    setUser(username);
    // Save user to localStorage for persistence
    saveUser(username);
    // Load tasks for this specific user
    const userTasks = loadTasks(username);
    setTasks(userTasks);
  };

  const handleLogout = () => {
    clearUser();
    // Don't clear tasks - they should persist per user
    setUser(null);
    setTasks([]);
    setCurrentFilter('all');
    setSearchTerm('');
    setEditingTask(null);
    setShowTaskForm(false);
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('task-tracker-dark-mode', newDarkMode.toString());
  };

  const handleAddTask = (task) => {
    if (editingTask) {
      // Update existing task
      setTasks(prevTasks => 
        prevTasks.map(t => t.id === task.id ? task : t)
      );
      setEditingTask(null);
    } else {
      // Add new task
      setTasks(prevTasks => [...prevTasks, task]);
    }
    setShowTaskForm(false);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setShowTaskForm(false);
  };

  const getFilteredTasks = () => {
    let filtered = tasks;

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchLower) ||
        task.description?.toLowerCase().includes(searchLower) ||
        task.category?.toLowerCase().includes(searchLower)
      );
    }

    // Apply status filter
    switch (currentFilter) {
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      case 'pending':
        filtered = filtered.filter(task => !task.completed);
        break;
      default:
        // 'all' - no additional filtering
        break;
    }

    return filtered;
  };

  const getTaskCounts = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    return { total, completed, pending };
  };

  const filteredTasks = getFilteredTasks();
  const taskCounts = getTaskCounts();

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <MobileOptimizations />
      <header className="app-header">
        <div className="header-content">
          <h1>Task Tracker</h1>
          <div className="user-info">
            <span>Welcome, {user}!</span>
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
            <button onClick={handleLogout} className="btn btn-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="dashboard">
          <div className="dashboard-header">
            <TaskFilter
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
              taskCounts={taskCounts}
            />
            
            <button
              onClick={() => setShowTaskForm(true)}
              className="btn btn-primary add-task-btn"
            >
              + Add Task
            </button>
          </div>

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {showTaskForm && (
            <div className="task-form-overlay">
              <TaskForm
                onAddTask={handleAddTask}
                editingTask={editingTask}
                onCancelEdit={handleCancelEdit}
              />
            </div>
          )}

          <TaskList
            tasks={filteredTasks}
            filter={currentFilter}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
