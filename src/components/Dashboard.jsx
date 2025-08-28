import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Paper, Typography } from '@mui/material';
import StageColumn from './StageColumn';
import FilterTasks from './FilterTasks';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveTask } from '../redux/taskSlice';

const stages = [
  { id: 'todo', label: 'To Do' },
  { id: 'inprogress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
];

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.stages);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    dispatch(
      moveTask({
        sourceStage: source.droppableId,
        destStage: destination.droppableId,
        taskIndex: source.index,
      })
    );
  };

  return (
    <>
      <FilterTasks />
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {stages.map((stage) => (
            <Grid item xs={12} md={4} key={stage.id}>
              <Paper sx={{ p: 2, minHeight: '70vh', backgroundColor: '#f7f7f7' }} elevation={3}>
                <Typography variant="h6" mb={2} fontWeight="bold">
                  {stage.label}
                </Typography>
                <StageColumn stageId={stage.id} tasks={tasks[stage.id]} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </>
  );
};

export default Dashboard;
