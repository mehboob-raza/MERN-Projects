import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBooks from "./pages/ShowBooks";
import "./App.css";

export const serverUrl = import.meta.env.PROD
  ? "https://vercel-server-test-ten.vercel.app"
  : "http://localhost:2000";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
      </Routes>
    </Box>
  );
};

export default App;
