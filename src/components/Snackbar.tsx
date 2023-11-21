import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useState, ComponentType, ReactElement } from "react";
import { Alert } from "@mui/material";

export type ISnackbar = ComponentType<
  TransitionProps & {
    children: ReactElement<any, any>;
  }
>;

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function CustomizedSnackbars() {
  const [state, setState] = useState<{
    open: boolean;
    Transition: ISnackbar;
  }>({
    open: false,
    Transition: SlideTransition,
  });

  const handleClick = (Transition: ISnackbar) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
