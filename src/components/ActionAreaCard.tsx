import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface cardProps {
  title: string,
  src: string
}

export default function ActionAreaCard({ title, src }: cardProps) {
  return (
    <Link href={{ pathname: `/login`, query: { program: title } }}>
      <Card className="mx-0 w-auto sm:w-96" sx={{ maxWidth: 345 }}>
        <CardActionArea className="pt-10 pb-4">
          <CardMedia
            className="mx-auto"
            component="img"
            image={src}
            alt={title}
            style={{
              width: "140px",
            }}
          />
          <CardContent>
            <Typography
              className="font-semibold text-center mb-0"
              gutterBottom
              variant="h4"
              component="div"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
