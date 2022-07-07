import { BiBookAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BsChatSquare } from "react-icons/bs";
const studentNavLinks = [
    { name: "My Batches", icon: BiBookAlt, to: "/dashboard/batches" },
    { name: "Profile", icon: FaRegUser, to: "/dashboard/profile" },
    { name: "Chat", icon: BsChatSquare, to: "/chat" },
];

const teacherNavLinks = [
    { name: "My Courses", icon: BiBookAlt, to: "/dashboard/courses" },
    { name: "Profile", icon: FaRegUser, to: "/dashboard/profile" },
    { name: "Chat", icon: BsChatSquare, to: "/chat" },
];

export { studentNavLinks, teacherNavLinks };
