import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SendIcon from "@mui/icons-material/Send";
import { 
    AccountCircleOutlined,
    LogoutOutlined,
    HowToRegOutlined,
    PersonOutlineOutlined,
    InsertChartOutlined,
    NoteOutlined
   } from "@mui/icons-material";
import Image from "next/image";

interface Props {
  nameIcon: string;
  className?: string;
}

export default function GlobalIcon({ nameIcon, className }: Props) {
  switch (nameIcon) {
    case "studentIcon":
      return <SchoolIcon className={className} />;
    case "candidateIcon":
      return <HowToRegOutlined className={className} />;
    case "teacherIcon":
      return <PersonOutlineOutlined className={className} />;
    case "coordinatorIcon":
      return <InsertChartOutlined className={className} />;
    case "deleteIcon":
      return <DeleteIcon className={className} />;
    case "warningIcon":
      return <WarningAmberIcon className={className} />;
    case "accountCircleOutlined":
      return <AccountCircleOutlined className={className} />;
    case "logoutOutlined":
      return <LogoutOutlined className={className} />;
    case "taskIcon":
      return <TaskIcon className={className} />;
    case "listOutlined":
      return <ListOutlinedIcon className={className} />;
    case "sendIcon":
      return <SendIcon className={className} />;
    case "people":
      return <Image width={100} height={100} src="/app/people.svg" alt="people" />;
    case "sheetCheck":
      return <Image width={100} height={100} src="/app/sheetCheck.svg" alt="sheetCheck" />;
    case "book":
      return <Image width={100} height={100} src="/app/book.svg" alt="book" />;
    case "period":
      return <Image width={100} height={100} src="/app/period.svg" alt="period" />;
    case "student":
      return <Image width={100} height={100} src="/app/student.svg" alt="student" />;
    case "subject":
      return <Image width={100} height={100} src="/app/subject.svg" alt="subject" />;
    case "teacher":
      return <Image width={100} height={100} src="/app/teacher.svg" alt="teacher" />;
    case "report":
      return <Image width={100} height={100} src="/app/report.svg" alt="report" />;
    case "back":
      return <Image width={40} height={40} src="/app/back.svg" alt="back" />;
    case "sheet":
      return <Image width={100} height={100} src="/app/sheet.svg" alt="sheet" />;
    case "google-color":
      return <Image width={100} height={100} src="/app/google-color.svg" alt="google-color" />;
    default:
      return <SendIcon className={className} />;
  }
}
