import React, { useState } from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#e53e3e';
      case 'medium': return '#d69e2e';
      case 'low': return '#38a169';
      default: return '#718096';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return 'Medium';
    }
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    const today = new Date();
    const due = new Date(dueDate);
    return due < today && due.toDateString() !== today.toDateString();
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <div className="task-checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              id={`task-${task.id}`}
            />
            <label htmlFor={`task-${task.id}`} className="checkbox-label"></label>
          </div>
          
          <div className="task-info">
            <div className="task-header-row">
              <h4 className="task-title">{task.title}</h4>
              <div className="task-badges">
                {task.priority && (
                  <span 
                    className="priority-badge"
                    style={{ backgroundColor: getPriorityColor(task.priority) }}
                  >
                    {getPriorityLabel(task.priority)}
                  </span>
                )}
                {task.category && (
                  <span className="category-badge">
                    {task.category}
                  </span>
                )}
              </div>
            </div>
            
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
            
            <div className="task-meta">
              <span className="task-date">
                Created: {formatDate(task.createdAt)}
              </span>
              {task.updatedAt !== task.createdAt && (
                <span className="task-date">
                  Updated: {formatDate(task.updatedAt)}
                </span>
              )}
              {task.dueDate && (
                <span className={`task-date ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                  {isOverdue(task.dueDate) && ' ⚠️ Overdue'}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="task-actions">
          <button
            onClick={() => onEdit(task)}
            className="btn btn-edit"
            title="Edit task"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-delete"
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>
      
      {showDeleteConfirm && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this task?</p>
          <div className="confirmation-actions">
            <button onClick={confirmDelete} className="btn btn-danger">
              Delete
            </button>
            <button onClick={cancelDelete} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem; 