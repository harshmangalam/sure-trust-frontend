import { BiBookAlt } from "react-icons/bi";
import { MdOutlineArticle, MdOutlineAssignmentInd, MdOutlineChatBubbleOutline, MdPerson } from "react-icons/md";

const studentNavLinks = [
    { name: "My Batches", icon: BiBookAlt, to: "/dashboard/batches" },
    { name: "Profile", icon: MdPerson, to: "/dashboard/profile" },
];

const teacherNavLinks = [
    { name: "My Courses", icon: BiBookAlt, to: "/dashboard/courses" },
    { name: "Profile", icon: MdPerson, to: "/dashboard/profile" },
];

export { studentNavLinks, teacherNavLinks };
