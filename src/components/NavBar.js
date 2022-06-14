import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  Button,
  List,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
function SimpleDialog(props) {
  const { handleClose, open } = props;
  const copyToClipBoard = (e) => {
    const cb = navigator.clipboard;
    cb.writeText(e.target.innerText);
  };
  return (
    <Dialog open={open}>
      <DialogTitle style={{ display: "flex" }}>
        <div style={{ fontFamily: "Poppins", margin: "0px 10px" }}>
          Phone Gateway
        </div>
        <Button onClick={handleClose} style={{ marginLeft: "40px" }}>
          <CloseIcon />
        </Button>
      </DialogTitle>
      <List sx={{ pt: 0, textAlign: "center", fontSize: "large" }}>
        Contact us :{" "}
        <span
          onClick={copyToClipBoard}
          style={{ cursor: "pointer", color: "blue" }}
        >
          +1 860-317-0564
        </span>
      </List>
    </Dialog>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <SimpleDialog open={open} handleClose={handleClose} />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{ color: "white" }}
            flexGrow={1}
            fontFamily={"Poppins"}
          >
            <b>Sakhi</b>
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", display: "flex", justifyContent: "end" }}
            flexGrow={1}
            fontFamily={"Poppins"}
          >
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={handleClickOpen}
            >
              <PhoneIcon />
              <div>Phone Gateway</div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
