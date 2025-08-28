import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Dashboard from "./Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function RightSideIcon() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 24,
        right: 250,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 10,
      }}
      dangerouslySetInnerHTML={{
        __html: `
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M108.02 2.91C104.71 2.91 102.02 5.6 102.02 8.91V11.8C102.02 12.41 101.76 13.34 101.45 13.86L100.3 15.77C99.59 16.95 100.08 18.26 101.38 18.7C105.69 20.14 110.34 20.14 114.65 18.7C115.86 18.3 116.39 16.87 115.73 15.77L114.58 13.86C114.28 13.34 114.02 12.41 114.02 11.8V8.91C114.02 5.61 111.32 2.91 108.02 2.91Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M109.87 3.2C109.56 3.11 109.24 3.04 108.91 3C107.95 2.88 107.03 2.95 106.17 3.2C106.46 2.46 107.18 1.94 108.02 1.94C108.86 1.94 109.58 2.46 109.87 3.2Z" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M111.02 19.06C111.02 20.71 109.67 22.06 108.02 22.06C107.2 22.06 106.44 21.72 105.9 21.18C105.36 20.64 105.02 19.88 105.02 19.06" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10"/>
          <circle cx="114" cy="4" r="3" fill="#BC9CF1"/>
          <path d="M65 18.4301H61L56.55 21.39C55.89 21.83 55 21.3601 55 20.5601V18.4301C52 18.4301 50 16.4301 50 13.4301V7.42999C50 4.42999 52 2.42999 55 2.42999H65C68 2.42999 70 4.42999 70 7.42999V13.4301C70 16.4301 68 18.4301 65 18.4301Z" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60 11.36V11.15C60 10.47 60.42 10.11 60.84 9.82001C61.25 9.54001 61.66 9.18002 61.66 8.52002C61.66 7.60002 60.92 6.85999 60 6.85999C59.08 6.85999 58.34 7.60002 58.34 8.52002" stroke="#5A2D82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M59.9955 13.75H60.0045" stroke="#5A2D82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 2V5" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V5" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.5 9.09H20.5" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#5A2D82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9955 13.7H12.0045" stroke="#5A2D82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.29431 13.7H8.30329" stroke="#5A2D82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.29431 16.7H8.30329" stroke="#5A2D82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      }}
    />
  );
}

function UserProfile() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 24,
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "transparent",
        userSelect: "none",
      }}
    >
      <Box sx={{ textAlign: "right", ml: 2 ,cursor: 'pointer'}}>
        <Typography fontWeight="bold" color="black" fontSize={16}>
          Palak Jain
        </Typography>
        <Typography fontSize={12} color="gray">
          Rajasthan, India
        </Typography>
      </Box>
      <Avatar
        alt="Palak Jain"
        src="https://i.pravatar.cc/40"
        sx={{ width: 40, height: 40 }}
      />
      <IconButton size="small" sx={{ ml: -1 }}>
        <ArrowDropDownIcon />
      </IconButton>
    </Box>
  );
}

export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        overflowY: "auto",
        bgcolor: "#f0f2f5",
        position: "relative",
        
      }}
    >
      {/* Top bar with Mobile App, icons, search, invite */}

      <Box sx={{ flexGrow: 1, maxWidth: 417 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for anything..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </Box>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ccc",
          marginBottom: 24,
          width: "100%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 5,
          mb: 5,
          gap: 80,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: 2 }}>
            Mobile App
          </Typography>
          <IconButton
            size="small"
            aria-label="edit"
            sx={{
              backgroundColor: "#E6E0FE",
              color: "#5A2D82",
              "&:hover": { backgroundColor: "#D2C8FC" },
              borderRadius: 1,
              padding: "6px",
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            aria-label="link"
            sx={{
              backgroundColor: "#E6E0FE",
              color: "#5A2D82",
              "&:hover": { backgroundColor: "#D2C8FC" },
              borderRadius: 1,
              padding: "6px",
            }}
          >
            <LinkIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         
          {/* Square add box like link icon box */}
          <Box
            sx={{
               backgroundColor: "#E6E0FE",
              color: "#5A2D82",
              "&:hover": { backgroundColor: "#D2C8FC" },
              borderRadius: 1,
              width: 25,
              height: 25,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              ml: 5,
            }}
          >
            <AddIcon fontSize="small" />
          </Box>
          {/* Invite text button styled as text */}
          <Box
            sx={{
              color: "#5A2D82",
              "&:hover": { backgroundColor: "#D2C8FC" },
              fontWeight: "bold",
              cursor: "pointer",
              userSelect: "none",
              fontSize: 16,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            Invite
          </Box>

          <Box sx={{ display: "flex", position: "relative" }}>
            <Avatar
              alt="User 1"
              src="https://i.pravatar.cc/40?img=1"
              sx={{ width: 32, height: 32, mr: -1 }}
            />
            <Avatar
              alt="User 2"
              src="https://i.pravatar.cc/40?img=2"
              sx={{ width: 32, height: 32, mr: -1 }}
            />
            <Avatar
              alt="User 3"
              src="https://i.pravatar.cc/40?img=3"
              sx={{ width: 32, height: 32, mr: -1 }}
            />
            <Avatar
              alt="User 4"
              src="https://i.pravatar.cc/40?img=4"
              sx={{ width: 32, height: 32 }}
            />
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "#FFE6EE",
                color: "#FF6863",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                position: "absolute",
                right: -25,
                userSelect: "none",
              }}
            >
              +2
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Dashboard content heading removed per request */}

      <Dashboard />

      {/* Right side icons */}
      <RightSideIcon />

      {/* User profile info */}
      <UserProfile />
    </Box>
  );
}
