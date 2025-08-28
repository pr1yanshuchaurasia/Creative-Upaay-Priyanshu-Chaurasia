import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const priorityColors = {
  low: 'success',
  medium: 'warning',
  high: 'error',
};

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          variant="outlined"
          sx={{
            mb: 1,
            backgroundColor: snapshot.isDragging ? '#e0f7fa' : 'white',
            cursor: 'pointer',
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent sx={{ p: 1.5 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                {task.name}
              </Typography>
              <Chip label={task.priority} color={priorityColors[task.priority]} size="small" />
            </Box>
            <Typography variant="body2">{task.description}</Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
