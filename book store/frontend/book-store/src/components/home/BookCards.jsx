import { GrInfo, GrFormEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const BookCards = ({ books }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {books.map((book) => {
        return (
          <Box
            key={book.id}
            sx={{
              width: "30%",

              p: 3,
              border: "2px solid gray",
              gap: 3,
              borderRadius: 2,
            }}
          >
            <Box display="flex" gap={3} flexWrap="wrap">
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Title:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.title}{" "}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Author:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.author}{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Publish Year : </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.publishYear}{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              //   gap={1}
              mt={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link to={`/books/details/${book._id}`}>
                <GrInfo
                  style={{
                    fontSize: "16px",
                    color: "#d345",
                  }}
                />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <GrFormEdit
                  style={{
                    fontSize: "20px",
                    color: "#d56",
                  }}
                />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <AiFillDelete
                  style={{
                    fontSize: "16px",
                    color: "red",
                  }}
                />
              </Link>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default BookCards;
