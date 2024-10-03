// import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box sx={{ marginTop: "20px" }}>
        <Outlet />
      </Box>
    </>
  );
}
