 
import React, { useEffect, useContext } from 'react';
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import AlertContext from "../../context/alert/context";


const Messages = ({ msg, handleClose }) => (
    <Snackbar
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
          autoHideDuration={6000}
          open={open}
          onClose={handleClose}
      >
        <SnackbarContent 
          message={msg} 
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose} >
              <Close />
            </IconButton>,

          ]}
        />
    </Snackbar>
)

export default ({ msg }) => {

  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (alerts.length)
      setOpen(true);
  }, [alerts]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      { !!alerts.length && 
        alerts.map(err => <Messages  msg="Error" handleClose={handleClose} /> )}
    </div>
  );
      
}