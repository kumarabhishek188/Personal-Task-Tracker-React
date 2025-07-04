import React, { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onAddTask, editingTask = null, onCancelEdit }) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');
  const [priority, setPriority] = useState(editingTask ? editingTask.priority : 'medium');
  const [dueDate, setDueDate] = useState(editingTask ? editingTask.dueDate : '');
  const [category, setCategory] = useState(editingTask ? editingTask.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        // Update existing task
        onAddTask({
          ...editingTask,
          title: title.trim(),
          description: description.trim(),
          priority,
          dueDate,
          category: category.trim(),
          updatedAt: new Date().toISOString()
        });
      } else {
        // Add new task
        onAddTask({
          id: Date.now().toString(),
          title: title.trim(),
          description: description.trim(),
          priority,
          dueDate,
          category: category.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
      
      // Reset form
      setTitle('');
      setDescription('');
      setPriority('medium');
      setDueDate('');
      setCategory('');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setCategory('');
    if (onCancelEdit) {
      onCancelEdit();
    }
  };

  return (
    <div className="task-form-container">
      <h3>{editingTask ? 'Edit Task' : 'Add New Task'}</h3>
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="task-title">Title *</label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
            autoFocus
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="3"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="task-priority">Priority</label>
            <select
              id="task-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-select"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="task-due-date">Due Date</label>
            <input
              type="date"
              id="task-due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="task-category">Category</label>
          <input
            type="text"
            id="task-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category (optional)"
            className="form-input"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm; 