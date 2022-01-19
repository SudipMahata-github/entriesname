import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles({
  tabale: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "&>*": {
      background: "#ab47bc",
      color: "#ffffff",
      fontSize: "20px",
    },
  },
  row: {
    "&>*": {
      fontSize: 20,
    },
  },
  btn: {
    textDecoration: "none",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});
function Alluser() {
  const styles = useStyles();
  const [data, setData] = useState([]);

  const getUsers = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "https://entriesname.herokuapp.com/users",
    })
      .then((res) => {
        const allData = res.data;
        setData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (_id) => {
    axios({
      method: "DELETE",
      url: `https://entriesname.herokuapp.com/users/${_id}`,
    })
      .then((res) => {
        console.log("deleted sucesfully");
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Table className={styles.tabale}>
        <TableHead>
          <TableRow className={styles.thead}>
            <TableCell>Id </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username </TableCell>
            <TableCell>Email </TableCell>
            <TableCell>Phone </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((users, index) => {
            return (
              <TableRow className={styles.row} key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{users.name}</TableCell>
                <TableCell>{users.username}</TableCell>
                <TableCell>{users.email}</TableCell>
                <TableCell>{users.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    onClick={() => deleteUser(users._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Alluser;
