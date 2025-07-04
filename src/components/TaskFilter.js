import React from 'react';
import '../styles/TaskFilter.css';

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.total },
    { key: 'pending', label: 'Pending', count: taskCounts.pending },
    { key: 'completed', label: 'Completed', count: taskCounts.completed }
  ];

  return (
    <div className="task-filter">
      <div className="filter-tabs">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">({filter.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter; 