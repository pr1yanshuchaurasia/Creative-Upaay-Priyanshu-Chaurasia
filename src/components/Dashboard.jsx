import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Paper, Typography } from "@mui/material";
import StageColumn from "./StageColumn";
import FilterTasks from "./FilterTasks";
import { DragDropContext } from "react-beautiful-dnd";
import { moveTask } from "../redux/taskSlice";

const stages = [
  { id: "todo", label: "To Do", color: "#3b82f6" }, // blue
  { id: "inprogress", label: "On Progress", color: "#f59e0b" }, // orange
  { id: "done", label: "Done", color: "#10b981" }, // green
];

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.stages);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

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
        <Box sx={{ overflowX: "auto" }}>
          <Grid container spacing={2} sx={{ mt: 1, flexWrap: "nowrap" }}>
            {stages.map((stage) => (
              <Grid item xs={4} key={stage.id}>
                <Paper
                  sx={{
                    p: 2,
                    minHeight: "70vh",
                    backgroundColor: "#f7f7f7",
                    borderRadius: "12px", // rounded corners
                  }}
                  elevation={3}
                >
                  {/* Header with dot + line + count */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    {/* Colored Dot */}
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: stage.color,
                        mr: 1.5,
                      }}
                    />
                    {/* Stage Label */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#333", mr: 1 }}
                    >
                      {stage.label}
                    </Typography>

                    {/* Task Count Badge */}
                    <Box
                      sx={{
                        px: 1,
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        backgroundColor: "#e5e7eb", // light gray
                        color: "#000",
                        minWidth: "24px",
                        textAlign: "center",
                      }}
                    >
                      {tasks[stage.id]?.length || 0}
                    </Box>
                  </Box>

                  {/* Horizontal Line */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 2,
                      backgroundColor: stage.color,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />

                  {/* Tasks */}
                  <StageColumn stageId={stage.id} tasks={tasks[stage.id]} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </DragDropContext>
    </>
  );
};

export default Dashboard;
