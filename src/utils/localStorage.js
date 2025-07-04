// localStorage utility functions for task management

const USER_KEY = 'task-tracker-user';

// Get user-specific task key
const getUserTasksKey = (username) => `task-tracker-tasks-${username}`;

export const saveTasks = (tasks, username) => {
  if (!username) {
    console.error('Username is required to save tasks');
    return false;
  }
  
  try {
    const tasksJson = JSON.stringify(tasks);
    const userTasksKey = getUserTasksKey(username);
    localStorage.setItem(userTasksKey, tasksJson);
    console.log(`Tasks saved successfully for user ${username}:`, tasks.length, 'tasks');
    return true;
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
    return false;
  }
};

export const loadTasks = (username) => {
  if (!username) {
    console.log('No username provided, returning empty tasks array');
    return [];
  }
  
  try {
    const userTasksKey = getUserTasksKey(username);
    const tasks = localStorage.getItem(userTasksKey);
    const parsedTasks = tasks ? JSON.parse(tasks) : [];
    console.log(`Tasks loaded successfully for user ${username}:`, parsedTasks.length, 'tasks');
    return parsedTasks;
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveUser = (username) => {
  try {
    localStorage.setItem(USER_KEY, username);
    console.log('User saved successfully:', username);
    return true;
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
    return false;
  }
};

export const loadUser = () => {
  try {
    const user = localStorage.getItem(USER_KEY) || null;
    console.log('User loaded successfully:', user);
    return user;
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
    return null;
  }
};

export const clearUser = () => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error clearing user from localStorage:', error);
  }
};

export const clearUserTasks = (username) => {
  if (!username) {
    console.error('Username is required to clear tasks');
    return false;
  }
  
  try {
    const userTasksKey = getUserTasksKey(username);
    localStorage.removeItem(userTasksKey);
    console.log(`Tasks cleared successfully for user ${username}`);
    return true;
  } catch (error) {
    console.error('Error clearing tasks from localStorage:', error);
    return false;
  }
};

// Get all users who have tasks stored
export const getAllUsersWithTasks = () => {
  try {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('task-tracker-tasks-')) {
        const username = key.replace('task-tracker-tasks-', '');
        users.push(username);
      }
    }
    return users;
  } catch (error) {
    console.error('Error getting users with tasks:', error);
    return [];
  }
};

// Clear all task-tracker data (for testing purposes)
export const clearAllTaskTrackerData = () => {
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('task-tracker')) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log('All task-tracker data cleared successfully');
    return true;
  } catch (error) {
    console.error('Error clearing all task-tracker data:', error);
    return false;
  }
}; 