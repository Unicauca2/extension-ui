import GlobalIcon from "@/components/GlobalIcon";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

interface Props {
  icon: string;
  label: string;
  to: string;
}
export default function IconActionCard({ icon, label, to }: Props) {
  return (
    <Link href={to}>
      <Card
        sx={{
          position: "relative",
          width: 200,
          height: 200,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover .card-content": {
            opacity: 1,
          },
          "&:hover .card-icon": {
            opacity: 0,
          },
        }}
      >
        <div className="absolute card-icon opacity-100">
          <GlobalIcon nameIcon={icon} />
        </div>
        <CardContent
          className="absolute font-semibold h-full card-content opacity-0 flex items-center text-center justify-center"
          sx={{ overflowWrap: "break-word" }}
        >
          <div>{label}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
