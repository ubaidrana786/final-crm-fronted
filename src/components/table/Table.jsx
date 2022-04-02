import React, { useEffect, useContext, useState } from "react"
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NoteContext from "../../RootContext/NoteContext";
import axios from "axios";

const List = () => {
  const { authToken } = useContext(NoteContext);
  const [ studentData, setstudentData ] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/students', {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
        console.log(response);
        setstudentData(response.data)
      })
  }, [])

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
    
  //       setstudentData(response.data)
  //     })
  // }, [])
  console.log(studentData);

  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Pending",
      status: "Approved",
      branch: "NEXCO",
    },
    {
      id: 2,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Pending",
      status: "Pending",
      branch: "NEXCO",
    },
    {
      id: 3,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Pending",
      status: "Pending",
      branch: "NEXCO",
    },
    {
      id: 4,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Pending",
      status: "Approved",
      branch: "NEXCO",
    },
    {
      id: 4,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Pending",
      status: "Pending",
      branch: "NEXCO",
    },
  ];


  const data = [
    {
      "_id": "6246e790c238578b9480d9d8",
      "fname": "test",
      "mname": "test",
      "lname": "test",
      "city": "test",
      "gender": "test",
      "date": "test",
      "email": "test",
      "number": "test",
      "branch": "test",
      "officer": "test",
      "__v": 0
    },
    {
      "_id": "6246eed525e469254aa731b1",
      "fname": "test 2",
      "mname": "test",
      "lname": "test",
      "city": "test",
      "gender": "test",
      "date": "test",
      "email": "test",
      "number": "test",
      "branch": "test",
      "officer": "test",
      "__v": 0
    },
    {
      "_id": "6246f75fa0f7024800b2a18f",
      "mname": "req.body.mname",
      "lname": "req.body.lname",
      "city": "req.body.city",
      "gender": "req.body.gender",
      "date": "req.body.date",
      "email": "req.body.email",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "__v": 0
    },
    {
      "_id": "6246f8dc0559bfd1d22407a7",
      "mname": "req.body.mname",
      "lname": "req.body.lname",
      "city": "req.body.city",
      "gender": "req.body.gender",
      "date": "req.body.date",
      "email": "req.body.email",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "__v": 0
    },
    {
      "_id": "6247d8fbc80c0708266daaaf",
      "mname": "1",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "__v": 0
    },
    {
      "_id": "6247d98f9a566385d4912705",
      "mname": "2",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6246f49f99323aa2e7143e4b",
      "__v": 0
    },
    {
      "_id": "6247daa4476b45ba6f2bd4c0",
      "mname": "2",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6246f49f99323aa2e7143e4b",
      "__v": 0
    },
    {
      "_id": "6247dbb7ec99086875b71506",
      "mname": "2",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6247db67ec99086875b71503",
      "__v": 0
    },
    {
      "_id": "6247dbcdec99086875b71508",
      "mname": "4",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6247db67ec99086875b71503",
      "__v": 0
    },
    {
      "_id": "6247dfe0a4a508b1cfbf70ec",
      "mname": "10",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6247dc43ec99086875b7150b",
      "__v": 0
    },
    {
      "_id": "6247e033a4a508b1cfbf70f3",
      "mname": "11",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6247e000a4a508b1cfbf70ef",
      "__v": 0
    },
    {
      "_id": "6247f3a26662447e72ed2dd0",
      "mname": "12",
      "lname": "1",
      "city": "1",
      "gender": "1",
      "date": "1",
      "email": "1",
      "number": "req.body.number",
      "branch": "req.body.branch",
      "officer": "req.body.officer",
      "userId": "6247f2ea7577664dc17d626b",
      "__v": 0
    }
  ]
  return (<>
    
    <TableContainer component={Paper} className="table">
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Citizenship</TableCell>
            <TableCell className="tableCell">Payment Status</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData &&  studentData.map((list, id) => (
            <TableRow key={list.id}>
              <TableCell className="tableCell">{list.fname}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{list.lname}</TableCell>
              <TableCell className="tableCell">{list.date}</TableCell>
              <TableCell className="tableCell">{list.amount}</TableCell>
              <TableCell className="tableCell">{list.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${list.status}`}>{list.status}</span>
              </TableCell>
              <TableCell className="tableCell">{list.branch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default List;
