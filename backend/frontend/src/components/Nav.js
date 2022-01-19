import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  header: {
    backgroundColor: "#e1bee7",
    position: "static",
  },
  navList: {
    color: "#212121",
    textDecoration: "none",
    marginRight: "20px",
    textTransform: "uppercase",
    fontSize: "20px",
    fontWeight: "bold",
  },
  navbar: {
    marginLeft: "37%",
  },
});
function Nav() {
  const style = useStyles();
  return (
    <div className="nav">
      <AppBar className={style.header}>
        <Toolbar className={style.navbar}>
          <Link className={style.navList} to="/">
            Home
          </Link>
          <Link className={style.navList} to="/all">
            All Names
          </Link>
          <Link className={style.navList} to="/add">
            Add Name
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
