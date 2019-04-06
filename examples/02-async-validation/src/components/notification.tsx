import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core';

interface Props {
  classes?: any;
  message: string;
  open: boolean;
  onClose: () => void;
  success: boolean;
}

const styles = () => ({
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
});

const InnerNotification: React.StatelessComponent<Props> = ({
  classes,
  message,
  open,
  onClose,
  success,
}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={open}
    autoHideDuration={2000}
    onClose={onClose}
  >
    <SnackbarContent
      className={success ? classes.success : classes.error}
      message={message}
      action={[
        <IconButton color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  </Snackbar>
);

export const Notification = withStyles(styles)(InnerNotification);
