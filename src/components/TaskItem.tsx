
import React from 'react';
import { Check, X } from 'lucide-react';
import { Task } from '@/types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className={`group bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200 ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 text-white'
              : 'border-gray-300 hover:border-blue-500'
          }`}
        >
          {task.completed && <Check className="w-3 h-3" />}
        </button>

        {/* Task Text */}
        <span className={`flex-1 transition-all duration-200 ${
          task.completed 
            ? 'text-gray-500 line-through' 
            : 'text-gray-800'
        }`}>
          {task.text}
        </span>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(task.id)}
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-1 rounded transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
