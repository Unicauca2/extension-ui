import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/RemoveRedEye";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: ({ target }: any, index?: any) => void;
}

export default function PasswordMeterInput({
  label,
  name,
  value,
  onChange,
}: Props) {
  const minLength = 12;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Stack
      sx={{
        "--hue": Math.min(value.length * 10, 120),
        display: "inline-flex",
      }}
    >
      <div className="flex relative items-center">
        <TextField
          type={showPassword ? "text" : "password"}
          placeholder="***********"
          label={label}
          name={name}
          value={value}
          style={{ width: "100%", marginTop: 0, marginBottom: 4 }}
          onChange={onChange}
          size="small"
        />
        <Button
          className="m-0 p-0 border absolute right-0"
          onClick={handleClickShowPassword}
          style={{ margin: 0, padding: 0 }}
        >
          <Key style={{ color: "gray", margin: 0, padding: 0 }} />
        </Button>
      </div>
      <div className="pl-2 pr-4">
        <LinearProgress
          determinate
          size="sm"
          value={Math.min((value.length * 100) / minLength, 100)}
          sx={{
            marginLeft: "8px",
            bgcolor: "background.level3",
            color: "hsl(var(--hue) 80% 40%)",
            "& .css-1pfpdzg-JoyLinearProgress-root": {
              paddingLeft: "4px",
            },
          }}
        />
      </div>
      <Typography
        level="body-xs"
        sx={{
          alignSelf: "flex-end",
          marginRight: "15px",
          color: "hsl(var(--hue) 80% 30%)",
        }}
      >
        {value.length == 0 && "\n"}
        {value.length < 3 && value.length > 0 && "Very weak"}
        {value.length >= 3 && value.length < 6 && "Weak"}
        {value.length >= 6 && value.length < 10 && "Strong"}
        {value.length >= 10 && "Very strong"}
      </Typography>
    </Stack>
  );
}
