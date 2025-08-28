import React from 'react';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
        <Sidebar />
        <MainContent />
      </Box>
    </>
  );
}

export default App;
