import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShareIcon from "@mui/icons-material/Share";
import { setPriorityFilter } from "../redux/filterSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 220,
    },
  },
};

const FilterTasks = () => {
  const dispatch = useDispatch();
  const priority = useSelector((state) => state.filter.priority);

  const handleChange = (e) => {
    dispatch(setPriorityFilter(e.target.value));
  };

  return (
    <Box
      mb={2}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <FormControl size="small" sx={{ minWidth: 8 }}>
        <Select
          value={priority}
          onChange={handleChange}
          displayEmpty
          input={
            <OutlinedInput
              startAdornment={
                <InputAdornment
                  position="start"
                  sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                >
                  <FilterListIcon />
                  <Typography variant="body2" color="text.secondary">
                    Filter
                  </Typography>
                </InputAdornment>
              }
            />
          }
          MenuProps={MenuProps}
          renderValue={(selected) => {
            if (!selected || selected === "all") {
              return "All";
            }
            return selected.charAt(0).toUpperCase() + selected.slice(1);
          }}
          inputProps={{ "aria-label": "filter tasks" }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      {/* Share button with icon and label */}
      <Box
        sx={{
          marginLeft: "800px",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          startIcon={<ShareIcon />}
          variant="outlined"
          sx={{
            borderRadius: 1,
            borderColor: "#ccc",
            color: "#5A5A5A",
            textTransform: "none",
            px: 2,
            height: ITEM_HEIGHT,
            "&:hover": {
              backgroundColor: "#f0f0f0",
              borderColor: "#aaa",
            },
          }}
        >
          Share
        </Button>

        <Divider orientation="vertical" flexItem sx={{ height: ITEM_HEIGHT }} />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0D47A1",
            color: "white",
            minWidth: "auto",
            px: 1.5,
            height: ITEM_HEIGHT,
            "&:hover": {
              backgroundColor: "#0B3D91",
            },
          }}
        >
          <DashboardIcon />
        </Button>
        {/* Four-dot menu button */}
        <IconButton
          aria-label="more"
          size="large"
          sx={{
            borderRadius: 1,
            border: "1px solid #ccc",
            color: "#5A5A5A",
            height: ITEM_HEIGHT,
            width: ITEM_HEIGHT,
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FilterTasks;
