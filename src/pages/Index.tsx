
import React, { useState } from 'react';
import { Plus, ListTodo } from 'lucide-react';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import { Task } from '@/types/Task';

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showInput, setShowInput] = useState(false);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    setShowInput(false);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
              <ListTodo className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Tasks</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{pendingTasks.length}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{completedTasks.length}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>

        {/* Add Task Button */}
        {!showInput && (
          <button
            onClick={() => setShowInput(true)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-4 px-6 mb-6 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 font-medium"
          >
            <Plus className="w-5 h-5" />
            Add New Task
          </button>
        )}

        {/* Task Input */}
        {showInput && (
          <TaskInput
            onAddTask={addTask}
            onCancel={() => setShowInput(false)}
          />
        )}

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full inline-block mb-4 opacity-20">
              <ListTodo className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tasks yet</h3>
            <p className="text-gray-500">Add your first task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
