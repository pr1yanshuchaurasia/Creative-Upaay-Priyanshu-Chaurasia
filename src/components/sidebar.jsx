import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  TextField,
} from '@mui/material';
import {
  Home,
  Message,
  Assignment,
  Group,
  Settings,
  Add,
  Lightbulb,
  MoreVert,
} from '@mui/icons-material';

// Your original double arrow SVG as React component
const DoubleArrowIcon = (props) => (
  <svg
    width="26"
    height="20"
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z"
      fill="#787486"
    />
    <path
      d="M12.5 17.225C12.3417 17.225 12.1834 17.1667 12.0584 17.0417L6.62502 11.6083C5.74169 10.725 5.74169 9.27499 6.62502 8.39165L12.0584 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1834 3.19999 13.1834 3.59999 12.9417 3.84165L7.50836 9.27499C7.10836 9.67499 7.10836 10.325 7.50836 10.725L12.9417 16.1583C13.1834 16.4 13.1834 16.8 12.9417 17.0417C12.8167 17.1583 12.6584 17.225 12.5 17.225Z"
      fill="#787486"
    />
  </svg>
);

// New SVG icon to place left of "Project M."
const LeftIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.6"
      d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
      fill="#5030E5"
    />
    <path
      d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
      fill="#5030E5"
    />
    <path
      opacity="0.4"
      d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
      fill="#5030E5"
    />
  </svg>
);

const drawerWidth = 260;

const projects = [
  'Mobile App',
  'Website Redesign',
  'Design System',
  'Wireframes',
];

const Sidebar = () => {
  const listItemTextSx = {
    fontSize: '0.8rem',
    color: 'text.disabled',
    transition: 'color 0.3s, font-weight 0.3s',
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          bgcolor: '#ffffff',
          borderRight: '1px solid #ddd',
          height: '100vh',
          position: 'relative',
        },
      }}
    >
      {/* Top Header with LeftIcon and DoubleArrowIcon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5, gap: 1 }}>
        <LeftIcon />
        <Typography variant="subtitle1" fontWeight="bold" sx={{ flexGrow: 1 }}>
          Project M.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            fontWeight: 'bold',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <DoubleArrowIcon />
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ flexGrow: 1, overflow: 'hidden',cursor: 'pointer' }}>
        <List>
          {[
            { icon: <Home />, text: 'Home' },
            { icon: <Message />, text: 'Messages' },
            { icon: <Assignment />, text: 'Tasks' },
            { icon: <Group />, text: 'Members' },
            { icon: <Settings />, text: 'Settings' },
          ].map(({ icon, text }) => (
            <ListItem
              button
              key={text}
              sx={{
                color: 'text.disabled',
                fontWeight: 'normal',
                transition: 'color 0.3s, font-weight 0.3s',
                '&:hover': {
                  color: 'text.primary',
                  fontWeight: 'bold',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ sx: listItemTextSx }} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ color: 'text.disabled', fontSize: '0.75rem' }}>
            MY PROJECTS
          </Typography>
          <IconButton
            size="small"
            color="primary"
            aria-label="Add Project"
            sx={{
              border: '1.5px solid',
              borderColor: 'primary.main',
              borderRadius: 1,
              width: 18,
              height: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Box>

        <List dense>
          {projects.map((project, index) => (
            <ListItem
              button
              key={project}
              sx={{
                color: 'text.disabled',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'normal',
                cursor: 'pointer',
                transition: 'color 0.3s, font-weight 0.3s',
                '&:hover': {
                  color: 'text.primary',
                  fontWeight: 'bold',
                  '.more-icon': { visibility: 'visible' },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: ['#F79009', '#B7D486', '#C4B5FD', '#82AAE3'][index] || '#ccc',
                    flexShrink: 0,
                  }}
                />
                <ListItemText primary={project} primaryTypographyProps={{ sx: listItemTextSx }} />
              </Box>
              <MoreVert
                className="more-icon"
                fontSize="small"
                sx={{
                  visibility: 'hidden',
                  color: 'text.primary',
                  cursor: 'pointer',
                  ml: 1,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        textAlign="center"
        mt={2}
        sx={{
          px: 1,
          border: '1.5px solid #ccc',
          borderRadius: 2,
          p: 2,
          bgcolor: '#fff',
        }}
      >
        <Lightbulb
          sx={{
            fontSize: 36,
            color: '#FDD835',
            mb: 1,
            boxShadow: '0 0 8px 2px rgba(253, 216, 53, 0.7)',
            borderRadius: '50%',
            display: 'inline-block',
            p: 0.5,
          }}
        />

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Thoughts Time
        </Typography>

        <Box
          component="div"
          sx={{
            color: 'text.disabled',
            fontSize: '0.75rem',
            lineHeight: 1.4,
            mb: 2,
            whiteSpace: 'pre-line',
            maxWidth: 220,
            mx: 'auto',
          }}
        >
          {"We don't have any notice for\nyou, till then you can share\nyour thoughts with your\npeers."}
        </Box>

        <TextField
          multiline
          minRows={1}
          placeholder="Write a message"
          variant="outlined"
          size="small"
          sx={{
            width: 180,
            mx: 'auto',
            '& input::placeholder': {
              fontWeight: 'bold',
              color: 'text.primary',
              opacity: 1,
            },
            '& textarea::placeholder': {
              fontWeight: 'bold',
              color: 'text.primary',
              opacity: 1,
              textAlign: 'center',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '1px',
          bgcolor: 'rgba(0,0,0,0.12)',
        }}
      />
    </Drawer>
  );
};

export default Sidebar;
