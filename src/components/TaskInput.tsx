
import React, { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
  onCancel: () => void;
}

const TaskInput = ({ onAddTask, onCancel }: TaskInputProps) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6 animate-in slide-in-from-top duration-300">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            disabled={!text.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
