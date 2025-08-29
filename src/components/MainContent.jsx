import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
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
        display: "block", // always visible
        position: { xs: "static", md: "absolute" }, // inline on mobile, absolute on desktop
        top: { md: 24 },
        right: { md: 250 },
        zIndex: 10,
        mt: { xs: 1, md: 0 },
        maxWidth: { xs: 80, sm: 100, md: 120 }, // shrink on small screens
        "& svg": {
          width: "100%", // responsive scaling
          height: "auto",
        },
      }}
      dangerouslySetInnerHTML={{
        __html: `  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </svg>`,
      }}
    />
  );
}

function UserProfile() {
  return (
    <Box
      sx={{
        position: { xs: "static", md: "absolute" },
        top: { md: 12 },
        right: { md: 16 },
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: { xs: 1, md: 0 }, // spacing on mobile
      }}
    >
      <Box sx={{ textAlign: "right", ml: 2, cursor: "pointer" }}>
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
        p: { xs: 1, sm: 2 },
        overflowY: "auto",
        bgcolor: "#f0f2f5",
        position: "relative",
      }}
    >
      {/* Top row (Search + RightSideIcon + UserProfile) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          mb: 2,
        }}
      >
        {/* Search bar */}
        <Box sx={{ flexGrow: 1, maxWidth: { xs: "100%", md: 417 } }}>
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

        {/* Right side (profile + svg icon) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <RightSideIcon />
          <UserProfile />
        </Box>
      </Box>

      {/* Divider */}
      <Box
        component="hr"
        sx={{
          border: "none",
          borderTop: "1px solid #ccc",
          mb: 3,
          width: "100%",
        }}
      />

      {/* Header row: Mobile App + actions */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, sm: 4, md: 8 },
          mb: 4,
        }}
      >
        {/* Left side title + icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ letterSpacing: 2, fontSize: { xs: 20, sm: 28 } }}
          >
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
              p: "2px",
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
              p: "2px",
            }}
          >
            <LinkIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Right side actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          {/* Add square */}
          <Box
            sx={{
              backgroundColor: "#E6E0FE",
              color: "#5A2D82",
              "&:hover": { backgroundColor: "#D2C8FC" },
              borderRadius: 1,
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <AddIcon fontSize="small" />
          </Box>

          {/* Invite button */}
          <Box
            sx={{
              color: "#5A2D82",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              "&:hover": { backgroundColor: "#D2C8FC" },
              borderRadius: 1,
            }}
          >
            Invite
          </Box>

          {/* Avatars */}
          <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
            {[1, 2, 3, 4].map((i) => (
              <Avatar
                key={i}
                alt={`User ${i}`}
                src={`https://i.pravatar.cc/40?img=${i}`}
                sx={{ width: 32, height: 32, mr: -1 }}
              />
            ))}
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
                mr: -1,
              }}
            >
              +2
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Dashboard */}
      <Dashboard />
    </Box>
  );
}
