import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, filter, onToggleComplete, onEdit, onDelete }) => {
  // Tasks are already filtered by the parent component
  const filteredTasks = tasks;

  const getTaskCounts = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    return { total, completed, pending };
  };

  const counts = getTaskCounts();

  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <div className="empty-state">
          <h3>No tasks yet!</h3>
          <p>Create your first task to get started.</p>
        </div>
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="task-list-empty">
        <div className="empty-state">
          <h3>No {filter} tasks</h3>
          <p>
            {filter === 'completed' 
              ? "You haven't completed any tasks yet." 
              : filter === 'pending' 
                ? "All tasks are completed! Great job!" 
                : "No tasks found."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-stats">
        <div className="stat-item">
          <span className="stat-number">{counts.total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.pending}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.completed}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
      
      <div className="tasks-container">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList; 