import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StageColumn from "./StageColumn";
import FilterTasks from "./FilterTasks";
import AddTaskForm from "./AddTaskForm";
import { DragDropContext } from "react-beautiful-dnd";
import { moveTask, addTask } from "../redux/taskSlice";

const stages = [
  { id: "todo", label: "To Do", color: "#3b82f6" },
  { id: "inprogress", label: "On Progress", color: "#f59e0b" },
  { id: "done", label: "Done", color: "#10b981" },
];

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.stages);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // Handle drag end
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

  // Handle adding a new task (always goes to "To Do")
  const handleAddTask = (newTask) => {
    dispatch(addTask({ stageId: "todo", task: newTask }));
    setOpen(false); // close dialog after adding
  };

  return (
    <>
      <FilterTasks />
      <DragDropContext onDragEnd={onDragEnd}>
        <Box
          sx={{
            width: "100%",
            mt: 1,
            px: { xs: 1, sm: 2 },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" }, // wrap on mobile, nowrap on desktop
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {stages.map((stage) => (
              <Grid
                item
                key={stage.id}
                xs={12}
                sm={6}
                md
                sx={{
                  flexGrow: 1, // make them stretch equally
                  minWidth: { xs: "100%", sm: "300px", md: "350px" }, // responsive min width
                }}
              >
                <Paper
                  sx={{
                    p: 2,
                    minHeight: { xs: "60vh", sm: "65vh", md: "70vh" },
                    backgroundColor: "#f7f7f7",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  elevation={3}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: stage.color,
                          mr: 1.5,
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#333", mr: 1 }}
                      >
                        {stage.label}
                      </Typography>
                      <Box
                        sx={{
                          px: 1,
                          borderRadius: "12px",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          backgroundColor: "#e5e7eb",
                          color: "#000",
                          minWidth: "24px",
                          textAlign: "center",
                        }}
                      >
                        {tasks[stage.id]?.length || 0}
                      </Box>
                    </Box>

                    {/* Add button (only for To Do) */}
                    {stage.id === "todo" && (
                      <IconButton
                        size="small"
                        onClick={() => setOpen(true)}
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "6px",
                          backgroundColor: "#E6E0FE",
                          color: "#5A2D82",
                          "&:hover": {
                            backgroundColor: "#D2C8FC",
                          },
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    )}
                  </Box>

                  {/* Line */}
                  <Box
                    sx={{
                      flexGrow: 0,
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

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <AddTaskForm onAddTask={handleAddTask} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
