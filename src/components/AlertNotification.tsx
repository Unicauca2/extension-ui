import {Alert, AlertColor} from "@mui/material";

interface alertProps {
    typeAlert: AlertColor;
    content: string;
}

export default function AlertNotification({ typeAlert, content }: alertProps) {
    return (
        <Alert
          severity={typeAlert}
          className="w-[60vh] text-[#000066] font-semibold shadow-3xl bottom-8 justify-end right-4 absolute"
        >
          {content}
        </Alert>
    )
}