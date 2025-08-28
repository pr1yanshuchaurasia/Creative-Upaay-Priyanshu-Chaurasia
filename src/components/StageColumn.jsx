import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';
import { addTask } from '../redux/taskSlice';

const StageColumn = ({ stageId, tasks }) => {
  const dispatch = useDispatch();
  const filterPriority = useSelector((state) => state.filter.priority);

  // Filter tasks by priority (if not 'all')
  const filteredTasks =
    filterPriority === 'all' ? tasks : tasks.filter((task) => task.priority === filterPriority);

  const handleAddTask = (newTask) => {
    dispatch(addTask({ stage: stageId, task: newTask }));
  };

  return (
    <Droppable droppableId={stageId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ minHeight: '50vh', backgroundColor: '#fff', borderRadius: 4, padding: 8 }}
        >
          {filteredTasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
          <AddTaskForm onAddTask={handleAddTask} />
        </div>
      )}
    </Droppable>
  );
};

export default StageColumn;
