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

interface Props {
  nameIcon: string;
  className?: string;
}

export default function GlobalIcon({ nameIcon, className }: Props) {
  switch (nameIcon) {
    case "studentIcon":
      return <SchoolIcon className={className} />
    case "candidateIcon":
      return <HowToRegOutlined className={className} />;
    case "teacherIcon":
      return <PersonOutlineOutlined className={className} />;
    case "coordinatorIcon":
      return <InsertChartOutlined className={className} />;
    case "deleteIcon":
      return <DeleteIcon className={className}/>;
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
      return <img src="/app/people.svg" alt="people" />;
    case "sheetCheck":
      return <img src="/app/sheetCheck.svg" alt="sheetCheck" />;
    case "book":
      return <img src="/app/book.svg" alt="book" />;
    case "period":
      return <img src="/app/period.svg" alt="period" />;
    case "student":
      return <img src="/app/student.svg" alt="student" />;
    case "subject":
      return <img src="/app/subject.svg" alt="subject" />;
    case "teacher":
      return <img src="/app/teacher.svg" alt="teacher" />;
    case "report":
      return <img src="/app/report.svg" alt="report" />;
    case "back":
      return <img src="/app/back.svg" alt="back" />;
    default:
      return <SendIcon className={className} />;
  }
}
