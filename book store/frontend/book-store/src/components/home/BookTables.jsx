import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { GrInfo, GrFormEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookTables = ({ books }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Publish Year</TableCell>
            <TableCell>Operations</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {books.map((book, i) => (
            <TableRow key={book._id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.publishYear}</TableCell>
              <TableCell>
                <Box display="flex" gap={1} alignItems="center">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default BookTables;
