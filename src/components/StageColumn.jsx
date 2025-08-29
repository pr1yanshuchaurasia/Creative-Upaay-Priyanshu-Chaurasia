import React from 'react';
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
    filterPriority === 'all'
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  const handleAddTask = (newTask) => {
    dispatch(addTask({ stage: stageId, task: newTask }));
  };

  return (
    <Droppable droppableId={stageId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            flex: 1,                        // equal width for all columns
            minWidth: '280px',              // slightly smaller for better responsiveness
            maxWidth: '350px',
            height: '80vh',                 // consistent height
            backgroundColor: '#fff',
            borderRadius: 4,
            padding: 8,
            marginLeft: stageId === 'todo' ? '16px' : '8px', // extra left margin only for first column
            marginRight: '8px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {filteredTasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}

          {/* AddTaskForm only in todo
          {stageId === 'todo' && <AddTaskForm onAddTask={handleAddTask} />} */}
        </div>
      )}
    </Droppable>
  );
};

export default StageColumn;
